import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-skill-form',
  templateUrl: './create-skill-form.component.html',
  styleUrls: ['./create-skill-form.component.scss'],
})
export class CreateSkillFormComponent implements OnInit {
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');

  @Output() cancelCreate: EventEmitter<any> = new EventEmitter();
  @Output() onCreate: EventEmitter<{
    title: string;
    description: string;
  }> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSave() {
    this.onCreate.emit({
      title: this.title.value,
      description: this.description.value,
    });
  }
}
