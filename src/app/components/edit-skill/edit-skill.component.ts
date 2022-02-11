import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { ActivatedRoute, Router } from '@angular/router';
import { iif, map, mergeMap, Observable, of, switchMap, take } from 'rxjs';
import { Skill } from '../../types/skill';
import { GetCategories, UpdateSkillAction } from '../../actions/skillsActions';

//TODO redo
const FIX_MAP = {
  computerscience: 'ComputerScience',
};

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss'],
})
export class EditSkillComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.min(3), Validators.required]),
    shortDescription: new FormControl('', [
      Validators.min(3),
      Validators.required,
    ]),
    description: new FormControl('', [Validators.min(3), Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  public categories$: Observable<string[]> = of([]);
  private skillId: string | null = null;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.store.dispatch(new GetCategories());
    this.categories$ = store.select((store) => store.skills.categories);
    route.paramMap
      .pipe(
        take(1),
        mergeMap((paramMap) => {
          this.skillId = paramMap.get('id');
          return store
            .select((st) => st.skills.skills)
            .pipe(
              take(1),
              map((skills: Skill[]) =>
                skills.filter((sk) => `${sk.id}` === paramMap.get('id'))
              )
            );
        })
      )
      .subscribe((res) => {
        const skill = res[0];
        if (!skill) {
          this.router.navigate(['/user/skills']);
          return;
        }
        this.form.patchValue({
          title: skill.title,
          shortDescription: skill.shortDescription,
          description: skill.description,
          //TODO: remove when be valida data
          category: skill.category[0] ? skill.category[0].name : 'sport',
        });
      });
  }

  ngOnInit(): void {}

  handleSave() {
    const { title, shortDescription, description, category } = this.form.value;

    this.store.dispatch(
      new UpdateSkillAction({
        id: this.skillId as string,
        title,
        shortDescription,
        description,
        //TODO redo
        // @ts-ignore
        category: FIX_MAP[category] ? FIX_MAP[category] : category,
      })
    );
  }
}
