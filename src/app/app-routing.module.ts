import {NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {SkillPage} from "./components/skill-page/skill-page";
import {SkillList} from "./components/skill-list/skill-list";
import {WelcomePage} from "./components/welcome-page/welcome-page";

const routes: Routes = [
  { path: 'skill-list', component: SkillList },
  { path: 'skill/:id', component: SkillPage },
  { path: '', component: WelcomePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
