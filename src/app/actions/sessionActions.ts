import { Action } from '@ngrx/store';

export enum SessionActionsEnum {
  successLogin = '[Session] success login',
  failedLogin = '[Session] failed login',
  registerUser = '[Session] register new user',
  login = '[Session] login',
  logout = '[Session] logout',
  authStatusCheck = '[Session] auth status check',
  setAuthStatus = '[Session] set auth status ',
}

export class LoginAction implements Action {
  public readonly type = SessionActionsEnum.login;
  public readonly payload;

  constructor(email: string, password: string) {
    this.payload = { email, password };
  }
}

export class SuccessLoginAction implements Action {
  public readonly type = SessionActionsEnum.successLogin;
}

export class FailedLoginAction implements Action {
  public readonly type = SessionActionsEnum.failedLogin;
  constructor(public payload: string) {}
}

export class SetAuthStatusAction implements Action {
  public readonly type = SessionActionsEnum.setAuthStatus;
  constructor(public payload: boolean) {}
}

export class AuthStatusCheck implements Action {
  public readonly type = SessionActionsEnum.authStatusCheck;
}

export class LogoutAction implements Action {
  public readonly type = SessionActionsEnum.logout;
}

export interface RegisterUserActionPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class RegisterUserAction implements Action {
  public readonly type = SessionActionsEnum.registerUser;

  constructor(public payload: RegisterUserActionPayload) {}
}

export type SessionActions =
  | SuccessLoginAction
  | AuthStatusCheck
  | LoginAction
  | LogoutAction
  | RegisterUserAction
  | SetAuthStatusAction
  | FailedLoginAction;
