import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss'],
})
export class RestorePasswordComponent implements OnInit {
  public email: FormControl = new FormControl('');
  public showSuccessMsg = false;
  constructor(private authService: SessionService) {}

  ngOnInit(): void {}

  public onRestore() {
    console.log('Restore password');
    if (this.email.value) {
      this.authService
        .restorePassword(this.email.value)
        .subscribe(() => (this.showSuccessMsg = true));
    }
  }
}
