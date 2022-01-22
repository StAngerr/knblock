import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  confirmPassword = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');
  isFormValid = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // @ts-ignore
  handleCreateUser() {
    if (
      !this.email.value.trim() ||
      !this.password.value.trim() ||
      !this.confirmPassword.value.trim() ||
      this.password.value.trim() !== this.confirmPassword.value.trim()
    ) {
      this.isFormValid = false;
      return false;
    }
    this.authService
      .signup(
        this.email.value,
        this.password.value,
        this.firstName.value,
        this.lastName.value
      )
      .subscribe((newUser) => {
        console.log(newUser);
      });
  }
}
