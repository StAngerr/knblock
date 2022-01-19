import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUrl } from '../constants/api-urls';

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
}
