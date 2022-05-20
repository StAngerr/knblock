import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../types/user';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { UpdateUser } from '../../actions/userActions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public currentUser$: Observable<User | null> = of(null);
  constructor(private store: Store<AppState>) {
    this.currentUser$ = this.store.select((state) => state.session.currentUser);
  }

  ngOnInit(): void {}

  handleUpdateProfileData(user: Partial<User>) {
    this.store.dispatch(new UpdateUser(user));
  }
}
