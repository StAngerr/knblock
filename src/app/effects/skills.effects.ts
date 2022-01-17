import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SkillService } from '../services/skill.service';
import {
  CreateNewSkillAction,
  SkillsActionsEnum,
} from '../actions/skillsActionsEnum';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { selectSkills } from '../selectors/skills.selectors';

@Injectable()
export class SkillsEffects {
  getSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.GetAll),
      mergeMap(() =>
        this.skillService.getSkills().pipe(
          map((skills) => ({
            type: SkillsActionsEnum.GetAllSuccess,
            payload: skills,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createSkill$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.CreateNewSkill),
      mergeMap((action: CreateNewSkillAction) =>
        this.skillService
          .createSkill(action.payload.title, action.payload.description)
          .pipe(
            map((newSkill) => ({
              //this.store.select(selectSkills)
              type: SkillsActionsEnum.GetAllSuccess,
              payload: [newSkill],
            })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private skillService: SkillService,
    private store: Store<AppState>
  ) {}
}
