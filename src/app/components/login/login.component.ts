import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { SuccessLoginAction } from '../../actions/loginActions';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public onLogin() {
    this.authService.login(this.email.value, this.password.value).subscribe(
      (res) => console.log(res),
      (ee) => {
        debugger;
      }
    );
    console.log(this.email.value, this.password.value);
    this.store.dispatch(new SuccessLoginAction());
    this.router.navigate(['/skills']);
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
