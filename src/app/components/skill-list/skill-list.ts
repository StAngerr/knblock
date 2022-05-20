import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../../state/app.state';
import { select, Store } from '@ngrx/store';
import { GetAllSkillsAction } from '../../actions/skillsActions';
import { selectSkills } from '../../selectors/skills.selectors';
import { debounce, interval, Observable } from 'rxjs';
import { Skill } from '../../types/skill';
import { FormControl } from '@angular/forms';

@Component({
  templateUrl: './skill-list.html',
  styleUrls: ['./skill-list.scss'],
})
export class SkillList implements OnInit {
  skills$: Observable<Skill[]> = this.store.pipe(select(selectSkills));
  auto: string = '';
  searchInput = new FormControl('');
  isCreateSkill = false;
  isEditSkill = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private store: Store<AppState>
  ) {
    this.searchInput.valueChanges
      .pipe(debounce(() => interval(300)))
      .subscribe(() => {
        const value = this.searchInput.value.trim();
        this.store.dispatch(
          new GetAllSkillsAction({
            searchQuery: value,
          })
        );
      });
  }

  openSkill(id: string) {
    this.router.navigate([`/skills/${id}`]);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSkillsAction());
  }

  handleCreate(): void {
    this.isCreateSkill = true;
    this.isEditSkill = false;
  }
}
