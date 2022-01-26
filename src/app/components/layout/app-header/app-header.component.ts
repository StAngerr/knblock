import { Component, Input, OnInit } from '@angular/core';
import { LogoutAction } from '../../../actions/sessionActions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  @Input() isAuthenticated = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  public onLogout() {
    this.store.dispatch(new LogoutAction());
  }
}
