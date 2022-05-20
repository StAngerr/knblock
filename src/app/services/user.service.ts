import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { mergeMap, Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userByIdUrl } from '../constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store<AppState>, private http: HttpClient) {}
  public updateProfileUserData(pUser: Partial<User>): Observable<User> {
    return this.store
      .select((store) => store.session.currentUser)
      .pipe(
        take(1),
        mergeMap((user: User | null) =>
          this.http.put<User>(userByIdUrl((user as User).id), {
            ...user,
            ...pUser,
          })
        )
      );
  }
}
