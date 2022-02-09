import { createAction, Action } from '@ngrx/store';
import { Skill } from '../types/skill';

export enum SkillsActionsEnum {
  GetAll = '[Skills] Get all skills',
  GetAllSuccess = '[Skills] Get all skills success',
  CreateNewSkill = '[Skills] Create new Skill',
  GetCategories = '[Skills] Get skill categories',
  SetSkillCategories = '[Skills] Set skill categories',
}

export class GetAllSkillsAction implements Action {
  public readonly type = SkillsActionsEnum.GetAll;
}

export class GetAllSkillsSuccessAction implements Action {
  public readonly type = SkillsActionsEnum.GetAllSuccess;

  constructor(public payload: Skill[]) {}
}

export class CreateNewSkillAction implements Action {
  public readonly type = SkillsActionsEnum.CreateNewSkill;

  constructor(public payload: Omit<Skill, 'id'>) {}
}

export class SetSkillCategories implements Action {
  public readonly type = SkillsActionsEnum.SetSkillCategories;

  constructor(public payload: string[]) {}
}

export class GetCategories implements Action {
  public readonly type = SkillsActionsEnum.GetCategories;
}
export type SkillsActions =
  | GetAllSkillsAction
  | GetAllSkillsSuccessAction
  | SetSkillCategories
  | GetCategories;
