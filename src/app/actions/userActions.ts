import { Action } from '@ngrx/store';
import { User } from '../types/user';

export enum UserActionEnum {
  UpdateUser = '[User] Update user action',
  UpdateUserSuccess = '[User] Success user update action',
}

export class UpdateUser implements Action {
  public type = UserActionEnum.UpdateUser;
  constructor(public payload: Partial<User>) {}
}

export type UserActions = UpdateUser;
