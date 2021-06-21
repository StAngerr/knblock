import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SkillList} from "./components/skill-list/skill-list";
import {CommonModule} from "@angular/common";
import {SkillPage} from "./components/skill-page/skill-page";
import {RouterModule} from "@angular/router";
import {WelcomePage} from "./components/welcome-page/welcome-page";

@NgModule({
  declarations: [
    AppComponent,
    SkillList,
    SkillPage,
    WelcomePage
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
