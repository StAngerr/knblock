import { Component } from '@angular/core';
import { AppState } from './state/app.state';
import { select, State } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'knblock';
  isAuthenticated: boolean = false;

  constructor(private state: State<AppState>) {
    state
      .pipe(select((s) => s.session.isAuthenticated))
      .subscribe((value) => (this.isAuthenticated = value));
  }
}
