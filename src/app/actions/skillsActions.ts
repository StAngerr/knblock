import { createAction, Action } from '@ngrx/store';
import { Skill } from '../types/skill';

export enum SkillsActionsEnum {
  GetAll = '[Skills] Get all skills',
  SetAllSkills = '[Skills] Set all skills',
  CreateNewSkill = '[Skills] Create new Skill',
  GetCategories = '[Skills] Get skill categories',
  SetSkillCategories = '[Skills] Set skill categories',
  SetUpdatedSkill = '[Skills] Set updated skill',
  UpdateSkill = '[Skills] Update skill',
  DeleteSkill = '[Skills] Delete skill',
  GetSkillById = '[Skills] Get skill by id',
  SetSelectedSkill = '[Skills] Set selected skill',
}

interface SkillRequestOptions {
  currentUserOnly?: boolean;
  searchQuery?: string;
}

export class GetAllSkillsAction implements Action {
  public readonly type = SkillsActionsEnum.GetAll;
  constructor(public payload: SkillRequestOptions = {}) {}
}

export class SetUpdatedSkillAction implements Action {
  public readonly type = SkillsActionsEnum.SetUpdatedSkill;
  constructor(public payload: Skill) {}
}

export class GetAllSkillsSuccessAction implements Action {
  public readonly type = SkillsActionsEnum.SetAllSkills;
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

export class DeleteSkillAction implements Action {
  public readonly type = SkillsActionsEnum.DeleteSkill;
  constructor(public payload: string) {}
}

export class GetCategories implements Action {
  public readonly type = SkillsActionsEnum.GetCategories;
}

export class UpdateSkillAction implements Action {
  public readonly type = SkillsActionsEnum.UpdateSkill;
  constructor(public payload: Pick<Skill, 'id'> & Partial<Skill>) {}
}

export class GetSkillByIdAction implements Action {
  public readonly type = SkillsActionsEnum.GetSkillById;
  constructor(public payload: string) {}
}

export class SetSelectedSkillAction implements Action {
  public readonly type = SkillsActionsEnum.SetSelectedSkill;
  constructor(public payload: Skill) {}
}

export type SkillsActions =
  | GetAllSkillsAction
  | GetAllSkillsSuccessAction
  | DeleteSkillAction
  | SetSkillCategories
  | SetUpdatedSkillAction
  | UpdateSkillAction
  | GetSkillByIdAction
  | SetSelectedSkillAction
  | GetCategories;
