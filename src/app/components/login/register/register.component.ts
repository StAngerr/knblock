import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/session.service';
import { AppState } from '../../../state/app.state';
import { Store } from '@ngrx/store';
import { RegisterUserAction } from '../../../actions/sessionActions';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.min(3)]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.min(3),
        ]),
      },
      SessionService.passwordMatchValidator
    ),
    firstName: new FormControl('', [Validators.min(3)]),
    lastName: new FormControl('', [Validators.min(3)]),
  });
  errors$: Observable<string[]> = of([]);

  constructor(
    private authService: SessionService,
    private store: Store<AppState>
  ) {
    this.errors$ = store.select((store) => store.session.errors);
  }

  ngOnInit(): void {}

  handleCreateUser() {
    if (this.form.valid && !this.form.get('passwords')!.errors?.length) {
      const email = this.form.get('email')!.value;
      const password = this.form.get('passwords.password')!.value;
      const firstName = this.form.get('firstName')!.value;
      const lastName = this.form.get('lastName')!.value;
      this.store.dispatch(
        new RegisterUserAction({
          email,
          password,
          firstName,
          lastName,
        })
      );
    }
  }
}
