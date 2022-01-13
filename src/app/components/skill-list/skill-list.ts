import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../state/app.state';
import { select, Store } from '@ngrx/store';
import { GetAllSkillsAction } from '../../actions/skillsActionsEnum';
import { selectUsers } from '../../selectors/skills.selectors';
import { Observable } from 'rxjs';
import { Skill } from '../../types/skill';

@Component({
  templateUrl: './skill-list.html',
})
export class SkillList implements OnInit {
  skills$: Observable<Skill[]> = this.store.pipe(select(selectUsers));

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
}
