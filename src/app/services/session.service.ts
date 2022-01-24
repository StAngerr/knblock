import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  authStatusCheckUrl,
  loginUrl,
  logoutUrl,
  sighupUrl,
} from '../constants/api-urls';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    return this.http.post(loginUrl(), {
      email,
      password,
    });
  }

  public logout() {
    return this.http.get(logoutUrl());
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

  public authStatusCheck(): Observable<User> {
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
