import { Action } from '@ngrx/store';

export enum LoginActionsEnum {
  successLogin = '[Login] success login',
}

export class SuccessLoginAction implements Action {
  public readonly type = LoginActionsEnum.successLogin;
}

export type LoginActions = SuccessLoginAction;
