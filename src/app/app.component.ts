import { Component } from '@angular/core';
import { AppState } from './state/app.state';
import { select, State, Store } from '@ngrx/store';
import { AuthStatusCheck } from './actions/sessionActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'knblock';
  isAuthenticated: boolean = false;

  constructor(private state: State<AppState>, private store: Store<AppState>) {
    store.dispatch(new AuthStatusCheck());
    state
      .pipe(select((s) => s.session.isAuthenticated))
      .subscribe((value) => (this.isAuthenticated = value));
  }
}
