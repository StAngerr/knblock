import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  public password = new FormControl('', [
    Validators.required,
    Validators.min(3),
  ]);
  public confirmPassword = new FormControl('');

  private token: string = '';
  private userId: string = '';

  constructor(
    public router: ActivatedRoute,
    private authService: SessionService
  ) {
    router.queryParams.subscribe((data) => {
      this.token = data.token;
      this.userId = data.userId;
    });
  }

  ngOnInit(): void {}

  public handleChangePassword() {
    console.log('Send request with token:', this.token);
    if (this.token && this.userId && this.password.value) {
      this.authService
        .changePassword(this.token, this.userId, this.password.value)
        .subscribe(() => console.log('ok'));
    }
  }
}
