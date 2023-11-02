import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-button-toggle-example',
  templateUrl: './button-toggle-example.component.html',
  styleUrls: ['./button-toggle-example.component.scss']
})
export class ButtonToggleExampleComponent implements OnInit {

  singleValue: any;
  singleChangedValue: any;
  multipleValue: any;

  formGroup: FormGroup = new FormGroup({
    'singleForm': new FormControl('', []),
    'multipleForm': new FormControl('', [])
  });

  get singleFormValue(): any {
    return this.singleField.value;
  }

  get multipleFormValue(): any {
    return this.multipleField.value;
  }

  get singleField(): FormControl {
    return <FormControl>this.formGroup.get('singleForm');
  }

  get multipleField(): FormControl {
    return <FormControl>this.formGroup.get('multipleForm');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event: MatButtonToggleChange) {
    this.singleChangedValue = $event.value;
  }
}
