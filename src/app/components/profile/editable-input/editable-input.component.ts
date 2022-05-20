import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss'],
})
export class EditableInputComponent implements OnInit {
  public isEdit: boolean = false;

  @Input()
  type: string = 'text';

  @Input()
  value: string = '';

  @Input()
  label: string = '';

  @Output()
  onChange: EventEmitter<string> = new EventEmitter<string>();

  public input = new FormControl({
    value: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.input.setValue(this.value);
  }

  handleEditField() {
    this.isEdit = true;
  }

  handleChangeValue() {
    this.onChange.emit(this.input.value);
    this.isEdit = false;
  }

  cancelEdit() {
    this.isEdit = false;
    this.input.setValue(this.value);
  }
}
