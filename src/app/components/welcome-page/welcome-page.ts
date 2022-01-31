import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { host } from '../../constants/api-urls';

@Component({
  templateUrl: './welcome-page.html',
})
export class WelcomePage {
  constructor(private http: HttpClient) {}
  makeRequest() {
    this.http
      .post(host + '/hello-world', {})
      .subscribe((res) => console.log(res));
  }
}
