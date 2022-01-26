import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  authStatusCheckUrl,
  loginUrl,
  logoutUrl,
  sighupUrl,
} from '../constants/api-urls';
import { catchError, Observable, tap } from 'rxjs';
import { User } from '../types/user';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient, private router: Router) {}

  public login(email: string, password: string) {
    return this.http
      .post(loginUrl(), {
        email,
        password,
      })
      .pipe(tap(() => this.router.navigate(['/skills'])));
  }

  public logout() {
    return this.http
      .get(logoutUrl())
      .pipe(tap(() => this.router.navigate(['/'])));
  }

  public signup(
    email: string,
    password: string,
    firstName: string = '',
    lastName: string = ''
  ) {
    return this.http.post(sighupUrl(), {
      email,
      password,
      firstName,
      lastName,
    });
  }

  public authStatusCheck() {
    return this.http.get<User>(authStatusCheckUrl());
  }

  public static passwordMatchValidator(
    g: AbstractControl
  ): ValidationErrors | null {
    return g.get('password')!.value === g.get('confirmPassword')!.value
      ? null
      : { mismatch: true };
  }
}
