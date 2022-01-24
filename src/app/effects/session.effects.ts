import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import {
  SessionActionsEnum,
  SuccessLoginAction,
} from '../actions/sessionActions';
import { SessionService } from '../services/session.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';

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
        debugger;
        return this.sessionService.authStatusCheck().pipe(
          map(() => new SuccessLoginAction()),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
