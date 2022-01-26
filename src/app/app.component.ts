import { Component } from '@angular/core';
import { AppState } from './state/app.state';
import { select, Store } from '@ngrx/store';
import { AuthStatusCheck } from './actions/sessionActions';
import { NavigationEnd, Router } from '@angular/router';
import { isBoolean } from 'lodash-es';
import { filter, map, mergeMap, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'knblock';
  isAuthenticated = false;

  constructor(private store: Store<AppState>, private router: Router) {
    // let url: string | null = null;
    // router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event) => {
    //     url = (event as NavigationEnd).url;
    //   });
    // store.dispatch(new AuthStatusCheck());
    store.pipe(select((s) => s.session.isAuthenticated)).subscribe((value) => {
      if (isBoolean(value)) {
        this.isAuthenticated = value;
      }
    });
  }
}
