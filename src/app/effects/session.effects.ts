import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, from, map, mergeMap, of } from 'rxjs';
import {
  FailedLoginAction,
  LoginAction,
  LogoutAction,
  RegisterUserActionPayload,
  SessionActionsEnum,
  SuccessLoginAction,
} from '../actions/sessionActions';
import { SessionService } from '../services/session.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class SessionEffects {
  constructor(
    private actions$: Actions,
    private sessionService: SessionService,
    private store: Store<AppState>
  ) {}

  checkAuthStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionActionsEnum.authStatusCheck),
      mergeMap(() => {
        return this.sessionService
          .authStatusCheck()
          .pipe(map(() => new SuccessLoginAction()));
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionActionsEnum.login),
      mergeMap(({ payload }: LoginAction) =>
        this.sessionService.login(payload.email, payload.password).pipe(
          map(() => new SuccessLoginAction()),
          catchError(({ error }: HttpErrorResponse) => {
            return of(new FailedLoginAction(error));
          })
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SessionActionsEnum.logout),
        mergeMap(() => this.sessionService.logout())
      ),
    { dispatch: false }
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionActionsEnum.registerUser),
      mergeMap((payload: RegisterUserActionPayload) =>
        this.sessionService
          .signup(
            payload.email,
            payload.password,
            payload.firstName,
            payload.lastName
          )
          .pipe(
            map(() => new SuccessLoginAction()),
            catchError(({ error }: HttpErrorResponse) =>
              of(new FailedLoginAction(error))
            )
          )
      )
    )
  );
}
