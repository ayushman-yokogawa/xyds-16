import {Component, OnInit} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {XyButtonComponent} from "xy-designsystem";

@Component({
  selector: 'app-button-example',
  templateUrl: './button-example.component.html',
  styleUrls: ['./button-example.component.scss']
})
export class ButtonExampleComponent implements OnInit {

  constructor() { }
  singleValue: any;
  singleChangedValue:  any;
  ngOnInit(): void {
  }
  onChange($event: MatButtonToggleChange) {
    this.singleChangedValue = $event.value;
  }
  onClick($event: MouseEvent, name: string) {
    alert(name + ' is clicked.');
  }

  onClick2($event: MouseEvent, target: XyButtonComponent) {
    target.focus();
  }
}
