import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../state/app.state';
import { select, Store } from '@ngrx/store';
import {
  CreateNewSkillAction,
  GetAllSkillsAction,
} from '../../actions/skillsActions';
import { selectSkills } from '../../selectors/skills.selectors';
import { Observable } from 'rxjs';
import { Skill } from '../../types/skill';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './skill-list.html',
  styleUrls: ['./skill-list.scss'],
})
export class SkillList implements OnInit {
  skills$: Observable<Skill[]> = this.store.pipe(select(selectSkills));
  auto: string = '';
  myControl = new FormControl();
  isCreateSkill = false;
  isEditSkill = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  openSkill(id: string) {
    this.router.navigate([`/skill/${id}`]);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSkillsAction());
  }

  handleCreate(): void {
    this.isCreateSkill = true;
    this.isEditSkill = false;
  }

  handleCreateSkill(newSkill: { title: string; description: string }) {
    this.store.dispatch(new CreateNewSkillAction(newSkill));
  }
}
