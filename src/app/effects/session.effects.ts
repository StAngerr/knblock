import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  FailedLoginAction,
  LoginAction,
  RegisterUserAction,
  SessionActionsEnum,
  SuccessLoginAction,
} from '../actions/sessionActions';
import { SessionService } from '../services/session.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../types/user';

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
        return this.sessionService.authStatusCheck().pipe(
          map((data: User) => {
            return new SuccessLoginAction(data);
          })
        );
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SessionActionsEnum.login),
      mergeMap(({ payload }: LoginAction) =>
        this.sessionService.login(payload.email, payload.password).pipe(
          map((data: User) => {
            return new SuccessLoginAction(data);
          }),
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
      mergeMap(({ payload }: RegisterUserAction) =>
        this.sessionService
          .signup(
            payload.email,
            payload.password,
            payload.firstName,
            payload.lastName
          )
          .pipe(
            map((data: User) => new SuccessLoginAction(data)),
            catchError(({ error }: HttpErrorResponse) =>
              of(new FailedLoginAction(error))
            )
          )
      )
    )
  );
}
