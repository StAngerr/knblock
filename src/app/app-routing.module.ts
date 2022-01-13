import {NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillPage} from "./components/skill-page/skill-page";
import {SkillList} from "./components/skill-list/skill-list";
import {WelcomePage} from "./components/welcome-page/welcome-page";

const routes: Routes = [
  { path: 'skill-list', component: SkillList },
  { path: 'skill/:id', component: SkillPage },
  { path: '', component: WelcomePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
