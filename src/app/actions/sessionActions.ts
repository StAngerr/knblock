import { Action } from '@ngrx/store';

export enum SessionActionsEnum {
  successLogin = '[Session] success login',
  authStatusCheck = '[Session] auth status check',
}

export class SuccessLoginAction implements Action {
  public readonly type = SessionActionsEnum.successLogin;
}

export class AuthStatusCheck implements Action {
  public readonly type = SessionActionsEnum.authStatusCheck;
}

export type SessionActions = SuccessLoginAction | AuthStatusCheck;
