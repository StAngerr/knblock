import { Injectable, Query } from '@angular/core';
import {
  defer,
  EMPTY,
  iif,
  mergeMap,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';
import { Skill } from '../types/skill';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  getCategoriesUrl,
  getDeleteSkillUrl,
  skillBaseUrl,
  skillByIdUrl,
} from '../constants/api-urls';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  public getSkills(params: HttpParams): Observable<Skill[]> {
    return this.http.get<Skill[]>(skillBaseUrl(), { params });
  }

  public createSkill(newSkill: Omit<Skill, 'id'>): Observable<Skill> {
    return this.http.post<Skill>(skillBaseUrl(), newSkill);
  }

  public getSkillById(id: string): Observable<Skill> {
    return this.http.get<Skill>(skillByIdUrl(id));
  }

  public getCategories() {
    return this.http.get<string[]>(getCategoriesUrl());
  }

  public deleteSkill(id: string) {
    return this.http.delete(getDeleteSkillUrl(id));
  }

  public updateSkill(
    skill: Pick<Skill, 'id'> & Partial<Skill>,
    skills?: Skill[]
  ) {
    return iif(
      () => !!!skills,
      defer(() =>
        this.store
          .select((store) => store.skills.skills)
          .pipe(
            take(1),
            mergeMap((storeSkills: Skill[]) => {
              const skillToUpdate = storeSkills.find(
                (item) => item.id === skill.id
              );
              return skillToUpdate
                ? this.http.put(skillByIdUrl(skill.id), {
                    ...skillToUpdate,
                    ...skill,
                  })
                : EMPTY;
            })
          )
      ),
      defer(() => {
        const skillToUpdate = skills!.find((item) => item.id === skill.id);
        return skillToUpdate
          ? this.http.put<Skill>(skillByIdUrl(skill.id), {
              ...skillToUpdate,
              ...skill,
            })
          : EMPTY;
      })
    );
  }
}
