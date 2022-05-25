import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-body-constructor',
  templateUrl: './skill-body-constructor.component.html',
  styleUrls: ['./skill-body-constructor.component.scss'],
})
export class SkillBodyConstructorComponent implements OnInit {
  isAddingNewSection = false;

  constructor() {}

  ngOnInit(): void {}

  onAddNewSection() {
    this.isAddingNewSection = true;
  }

  cancelAddNewSection() {
    this.isAddingNewSection = false;
  }
}
