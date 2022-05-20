import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSkillPage } from './components/single-skill-page/single-skill-page';
import { SkillList } from './components/skill-list/skill-list';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';

import { AuthOnlyUserGuard } from './guards/AuthOnlyUserGuard';
import { NoAuthUserGuard } from './guards/NoAuthUserGuard';
import { RestorePasswordComponent } from './components/login/restore-password/restore-password.component';
import { ChangePasswordComponent } from './components/login/change-password/change-password.component';
import { OutlinesComponent } from './components/outlines/outlines.component';
import { CreateSkillComponent } from './components/create-skill/create-skill.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { UserSkillsComponent } from './components/user-skills/user-skills.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthUserGuard] },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [NoAuthUserGuard],
  },
  {
    path: 'restore-password',
    component: RestorePasswordComponent,
    canActivate: [NoAuthUserGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    canActivate: [NoAuthUserGuard],
  },
  {
    path: 'skills',
    component: SkillList,
  },
  {
    path: 'skills/create',
    component: CreateSkillComponent,
    canActivate: [AuthOnlyUserGuard],
    pathMatch: 'full',
  },

  {
    path: 'skills/:id',
    component: SingleSkillPage,
  },
  {
    path: 'user/skills',
    component: UserSkillsComponent,
    canActivate: [AuthOnlyUserGuard],
  },
  {
    path: 'user/skills/edit/:id',
    component: EditSkillComponent,
    canActivate: [AuthOnlyUserGuard],
  },
  {
    path: 'user/profile',
    component: ProfileComponent,
    canActivate: [AuthOnlyUserGuard],
  },
  {
    path: 'outlines',
    component: OutlinesComponent,
  },
  { path: 'home', component: WelcomePage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
