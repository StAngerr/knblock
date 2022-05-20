import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { GetSkillByIdAction } from '../../actions/skillsActions';
import { Skill } from '../../types/skill';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './single-skill-page.html',
})
export class SingleSkillPage implements OnInit {
  public selectedSkill$: Observable<Skill | null> = of(null);
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.selectedSkill$ = store.select((store) => store.skills.selectedSkill);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(new GetSkillByIdAction(params['id']));
    });
  }
}
