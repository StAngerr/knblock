import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillList } from './components/skill-list/skill-list';
import { CommonModule } from '@angular/common';
import { SingleSkillPage } from './components/single-skill-page/single-skill-page';
import { RouterModule } from '@angular/router';
import { WelcomePage } from './components/welcome-page/welcome-page';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClientXsrfModule,
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
import { SetAuthStatusAction } from './actions/sessionActions';
import { SessionService } from './services/session.service';
import { catchError, EMPTY, of } from 'rxjs';
import { XSRFInterceptor } from './interceptors/XSRFInterceptor';
import { ChangePasswordComponent } from './components/login/change-password/change-password.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { UserMenuComponent } from './components/layout/user-menu/user-menu.component';
import { OutlinesComponent } from './components/outlines/outlines.component';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { MatSelectModule } from '@angular/material/select';
import { UserSkillsComponent } from './components/user-skills/user-skills.component';
import { ProfileComponent } from './components/profile/profile.component';
import { User } from './types/user';
import { EditableInputComponent } from './components/profile/editable-input/editable-input.component';
import { UserEffects } from './effects/user.effects';
import { SkillEditPageComponent } from './components/skill-edit-page/skill-edit-page.component';
import { SkillBodyConstructorComponent } from './components/skill-edit-page/skill-body-constructor/skill-body-constructor.component';
import { SkillHeadComponent } from './components/skill-edit-page/skill-head/skill-head.component';
import { SkillHeadStatusBarComponent } from './components/skill-edit-page/skill-head/skill-head-status-bar/skill-head-status-bar.component';
import { ContentTypeSelectorComponent } from './components/skill-edit-page/skill-body-constructor/content-type-selector/content-type-selector.component';

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
            store.dispatch(new SetAuthStatusAction(null));
            res(true);
            return EMPTY;
          })
        )
        .subscribe((data: User) => {
          store.dispatch(new SetAuthStatusAction(data));
          res(true);
        });
    });
}

@NgModule({
  declarations: [
    AppComponent,
    SkillList,
    SingleSkillPage,
    WelcomePage,
    LayoutComponent,
    CreateSkillFormComponent,
    LoginComponent,
    RegisterComponent,
    RestorePasswordComponent,
    AppHeaderComponent,
    ChangePasswordComponent,
    NavigationComponent,
    UserMenuComponent,
    OutlinesComponent,
    CreateSkillComponent,
    EditSkillComponent,
    UserSkillsComponent,
    ProfileComponent,
    EditableInputComponent,
    SkillEditPageComponent,
    SkillBodyConstructorComponent,
    SkillHeadComponent,
    SkillHeadStatusBarComponent,
    ContentTypeSelectorComponent,
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
    EffectsModule.forRoot([SkillsEffects, SessionEffects, UserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    HttpClientXsrfModule.withOptions(),
    MatSelectModule,
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
