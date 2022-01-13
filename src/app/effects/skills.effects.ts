import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SkillService } from '../services/skill.service';
import { SkillsActionsEnum } from '../actions/skillsActionsEnum';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';

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

  constructor(private actions$: Actions, private skillService: SkillService) {}
}
