import { Component, OnInit } from '@angular/core';
import {
  CreateNewSkillAction,
  GetCategories,
} from '../../actions/skillsActions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrls: ['./create-skill.component.scss'],
})
export class CreateSkillComponent implements OnInit {
  public title = new FormControl('');
  public description = new FormControl('');
  public shortDescription = new FormControl('');
  public category = new FormControl('');
  public categories$: Observable<string[]> = of([]);

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetCategories());
    this.categories$ = store.select((store) => store.skills.categories);
  }

  ngOnInit(): void {}

  handleCreate() {
    const newBlock = {
      title: this.title.value,
      description: this.description.value,
      shortDescription: this.shortDescription.value,
      category: this.category.value,
    };
    this.store.dispatch(new CreateNewSkillAction(newBlock));
  }
}
