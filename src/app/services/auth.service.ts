import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUrl, logoutUrl, sighupUrl } from '../constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
}
