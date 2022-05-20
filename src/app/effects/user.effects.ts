import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  UpdateUser,
  UserActionEnum,
  UserActions,
} from '../actions/userActions';
import { map, mergeMap } from 'rxjs';
import { UserService } from '../services/user.service';
import {
  SessionActionsEnum,
  SuccessLoginAction,
} from '../actions/sessionActions';
import { User } from '../types/user';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionEnum.UpdateUser),
      mergeMap((action: UserActions) =>
        this.userService.updateProfileUserData(action.payload).pipe(
          map((updatedUser: User) => ({
            type: SessionActionsEnum.successLogin,
            payload: updatedUser,
          }))
        )
      )
    )
  );
}
