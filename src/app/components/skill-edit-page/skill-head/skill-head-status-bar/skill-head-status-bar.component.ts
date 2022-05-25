import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-head-status-bar',
  templateUrl: './skill-head-status-bar.component.html',
  styleUrls: ['./skill-head-status-bar.component.scss'],
})
export class SkillHeadStatusBarComponent implements OnInit {
  tags = ['math', 'riddles', 'geometry'];
  rating = 4.7;
  author = 'John Moll';

  constructor() {}

  ngOnInit(): void {}
}
