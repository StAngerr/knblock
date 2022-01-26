import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import {
  LoginAction,
  LogoutAction,
  SuccessLoginAction,
} from '../../actions/sessionActions';
import { SessionService } from '../../services/session.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });
  errors$: Observable<string[]> = of([]);

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: SessionService
  ) {
    this.errors$ = store.select((store) => store.session.errors);
  }

  ngOnInit(): void {}

  public onLogin() {
    if (this.form.valid) {
      const email = this.form.get('email')!.value;
      const password = this.form.get('password')!.value;
      this.store.dispatch(new LoginAction(email, password));
    }
  }
}
