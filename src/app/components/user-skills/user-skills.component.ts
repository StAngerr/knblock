import { Component, OnInit } from '@angular/core';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Skill } from '../../types/skill';
import {
  DeleteSkillAction,
  GetAllSkillsAction,
} from '../../actions/skillsActions';

@Component({
  selector: 'app-user-skills',
  templateUrl: './user-skills.component.html',
  styleUrls: ['./user-skills.component.scss'],
})
export class UserSkillsComponent implements OnInit {
  $skills: Observable<Skill[]> = of([]);
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetAllSkillsAction({ currentUserOnly: true }));
    this.$skills = store.select((store) => store.skills.skills);
  }

  ngOnInit(): void {}

  handleRemoveSkill(id: string) {
    const res = window.confirm('Sure to delete skills (name) ' + id);
    if (res) {
      this.store.dispatch(new DeleteSkillAction(id));
    }
  }
}
