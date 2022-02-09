import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../types/skill';
import { HttpClient } from '@angular/common/http';
import { getCategoriesUrl, skillBaseUrl } from '../constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private http: HttpClient) {}

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(skillBaseUrl());
  }

  public createSkill(newSkill: Omit<Skill, 'id'>): Observable<Skill> {
    return this.http.post<Skill>(skillBaseUrl(), newSkill);
  }

  public getCategories() {
    return this.http.get<string[]>(getCategoriesUrl());
  }
}
