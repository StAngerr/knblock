import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { SuccessLoginAction } from '../../actions/sessionActions';
import { SessionService } from '../../services/session.service';

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

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: SessionService
  ) {}

  ngOnInit(): void {}

  public onLogin() {
    if (this.form.valid) {
      this.authService
        .login(this.form.get('email')!.value, this.form.get('password')!.value)
        .subscribe(
          (res) => console.log(res),
          (ee) => {
            debugger;
          }
        );
      this.store.dispatch(new SuccessLoginAction());
      this.router.navigate(['/skills']);
    }
  }

  public onLogout() {
    this.authService.logout().subscribe(
      (res) => console.log(res),
      (ee) => {
        debugger;
      }
    );
  }
}
