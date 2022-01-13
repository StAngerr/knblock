import {createAction, Action} from "@ngrx/store";
import {Skill} from "../types/skill";

export enum SkillsActionsEnum {
  GetAll = '[Skills] Get all skills',
  GetAllSuccess = '[Skills] Get all skills success'
}

export class GetAllSkillsAction implements Action {
  public readonly type = SkillsActionsEnum.GetAll;
}

export class GetAllSkillsSuccessAction implements Action {
  public readonly type = SkillsActionsEnum.GetAllSuccess;

  constructor(public payload: Skill[]) {
  }
}


export type SkillsActions = GetAllSkillsAction | GetAllSkillsSuccessAction
