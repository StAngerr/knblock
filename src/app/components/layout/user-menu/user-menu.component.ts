import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  @Input()
  isAuthenticated: boolean = false;

  @Output()
  logout = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleLogout() {
    this.logout.emit();
  }
}
