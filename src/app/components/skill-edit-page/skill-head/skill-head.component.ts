import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-head',
  templateUrl: './skill-head.component.html',
  styleUrls: ['./skill-head.component.scss'],
})
export class SkillHeadComponent implements OnInit {
  lastModified = '';
  constructor() {
    const today = new Date();
    this.lastModified = `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
  }

  ngOnInit(): void {}
}
