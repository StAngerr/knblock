import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillPage } from './components/skill-page/skill-page';
import { SkillList } from './components/skill-list/skill-list';
import { WelcomePage } from './components/welcome-page/welcome-page';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register/register.component';

import { AuthOnlyUserGuard } from './guards/AuthOnlyUserGuard';
import { NoAuthUserGuard } from './guards/NoAuthUserGuard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthUserGuard] },
  {
    path: 'signup',
    component: RegisterComponent,
    canActivate: [NoAuthUserGuard],
  },
  {
    path: 'skills',
    component: SkillList,
    canActivate: [AuthOnlyUserGuard],
  },
  {
    path: 'skill/:id',
    component: SkillPage,
    canActivate: [AuthOnlyUserGuard],
  },
  { path: 'home', component: WelcomePage },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
