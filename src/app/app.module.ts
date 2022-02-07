import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillList } from './components/skill-list/skill-list';
import { CommonModule } from '@angular/common';
import { SkillPage } from './components/skill-page/skill-page';
import { RouterModule } from '@angular/router';
import { WelcomePage } from './components/welcome-page/welcome-page';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
  HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { SkillsEffects } from './effects/skills.effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CreateSkillFormComponent } from './components/skill-list/create-skill-form/create-skill-form.component';
import { LoginComponent } from './components/login/login.component';
import { MainInterceptor } from './interceptors/MainInterceptor';
import { RestorePasswordComponent } from './components/login/restore-password/restore-password.component';
import { RegisterComponent } from './components/login/register/register.component';
import { SessionEffects } from './effects/session.effects';
import { AppHeaderComponent } from './components/layout/app-header/app-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthOnlyUserGuard } from './guards/AuthOnlyUserGuard';
import { NoAuthUserGuard } from './guards/NoAuthUserGuard';
import { AppState } from './state/app.state';
import { AuthStatusCheck, SetAuthStatusAction } from './actions/sessionActions';
import { SessionService } from './services/session.service';
import { catchError, EMPTY, of } from 'rxjs';
import { XSRFInterceptor } from './interceptors/XSRFInterceptor';
import { ChangePasswordComponent } from './components/login/change-password/change-password.component';

export function initApp(
  store: Store<AppState>,
  sessionService: SessionService
) {
  return () =>
    new Promise((res) => {
      sessionService
        .authStatusCheck()
        .pipe(
          catchError((e) => {
            console.error(e);
            store.dispatch(new SetAuthStatusAction(false));
            res(true);
            return EMPTY;
          })
        )
        .subscribe(() => {
          store.dispatch(new SetAuthStatusAction(true));
          res(true);
        });
    });
}

@NgModule({
  declarations: [
    AppComponent,
    SkillList,
    SkillPage,
    WelcomePage,
    LayoutComponent,
    CreateSkillFormComponent,
    LoginComponent,
    RegisterComponent,
    RestorePasswordComponent,
    AppHeaderComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SkillsEffects, SessionEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    HttpClientXsrfModule.withOptions(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [[new Inject(Store)], SessionService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XSRFInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
    AuthOnlyUserGuard,
    NoAuthUserGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
