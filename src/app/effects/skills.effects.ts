import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SkillService } from '../services/skill.service';
import {
  CreateNewSkillAction,
  DeleteSkillAction,
  GetAllSkillsAction,
  GetSkillByIdAction,
  SetSkillCategories,
  SkillsActionsEnum,
  UpdateSkillAction,
} from '../actions/skillsActions';
import { catchError, EMPTY, map, mergeMap, take } from 'rxjs';
import { AppState } from '../state/app.state';
import { Action, Store } from '@ngrx/store';
import { HttpParams } from '@angular/common/http';
import { Skill } from '../types/skill';

@Injectable()
export class SkillsEffects {
  getSkills$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.GetAll),
      mergeMap((action: GetAllSkillsAction) =>
        this.skillService.getSkills(action.payload as HttpParams).pipe(
          map((skills) => ({
            type: SkillsActionsEnum.SetAllSkills,
            payload: skills.map((item) => ({
              ...item,
              id: item.id.toString(),
            })),
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
        this.skillService.createSkill(action.payload).pipe(
          map((newSkill) => ({
            //this.store.select(selectSkills)
            type: SkillsActionsEnum.SetAllSkills,
            payload: [newSkill],
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  getCategories = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.GetCategories),
      mergeMap(() =>
        this.skillService
          .getCategories()
          .pipe(
            map((categories: string[]) => new SetSkillCategories(categories))
          )
      )
    )
  );

  $deleteSkill = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.DeleteSkill),
      mergeMap((action: DeleteSkillAction) =>
        this.skillService.deleteSkill(action.payload).pipe(
          mergeMap(() =>
            this.store
              .select((store: AppState) => store.skills.skills)
              .pipe(
                take(1),
                map((currentSkillList: Skill[]) => ({
                  type: SkillsActionsEnum.SetAllSkills,
                  payload: currentSkillList.filter(
                    (skill: Skill) => skill.id !== action.payload
                  ),
                }))
              )
          )
        )
      )
    )
  );

  $updateSkill = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.UpdateSkill),
      mergeMap((action: UpdateSkillAction) =>
        this.skillService.updateSkill(action.payload).pipe(
          map((updatedSkill) => ({
            type: SkillsActionsEnum.SetUpdatedSkill,
            payload: updatedSkill,
          }))
        )
      )
    )
  );

  $getSkillById = createEffect(() =>
    this.actions$.pipe(
      ofType(SkillsActionsEnum.GetSkillById),
      mergeMap((action: GetSkillByIdAction) =>
        this.skillService.getSkillById(action.payload).pipe(
          map((skill: Skill) => ({
            type: SkillsActionsEnum.SetSelectedSkill,
            payload: skill,
          }))
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
