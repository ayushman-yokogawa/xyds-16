import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'expension-panel-example',
  templateUrl: './expension-panel-example.component.html',
  styleUrls: ['./expension-panel-example.component.scss']
})
export class ExpensionPanelExampleComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

 

}
