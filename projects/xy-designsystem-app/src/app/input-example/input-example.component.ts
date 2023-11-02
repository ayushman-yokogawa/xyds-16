import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {XyInputComponent, XyTextareaComponent} from 'xy-designsystem';

@Component({
  selector: 'app-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent implements OnInit {
  requiredFormControl: FormControl = new FormControl('', [Validators.required]);
  searchKeyword: string = '';
  incrementalSearchKeyword: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSearch($event: any) {
    console.log("Search")
    this.searchKeyword = $event.value;
  }

  onIncrementalSearch($event: any) {
    this.incrementalSearchKeyword = $event.value;
  }

  onReset() {
    console.log("Reset")
    this.incrementalSearchKeyword = '';
  }

  doFocus(input: XyInputComponent|XyTextareaComponent) {
    input.focus();
  }

  doBlur(input: XyInputComponent|XyTextareaComponent) {
    input.blur();
  }

  doSetValue(input: XyInputComponent|XyTextareaComponent, v: string) {
    input.value = v;
  }

}
