import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../../services/session.service';

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

  constructor(private authService: SessionService) {}

  ngOnInit(): void {}

  handleCreateUser() {
    debugger;
    if (this.form.valid && !this.form.get('passwords')!.errors?.length) {
      this.authService
        .signup(
          this.form.get('email')!.value,
          this.form.get('passwords.password')!.value,
          this.form.get('firstName')!.value,
          this.form.get('lastName')!.value
        )
        .subscribe((newUser) => {
          console.log(newUser);
        });
    }
  }
}
