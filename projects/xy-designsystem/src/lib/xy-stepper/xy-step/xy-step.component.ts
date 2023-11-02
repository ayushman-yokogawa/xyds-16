import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xy-step',
  templateUrl: './xy-step.component.html',
  styleUrls: ['./xy-step.component.scss']
})
export class XyStepComponent implements OnInit {
  stepNumber = 0;
  isLast = false;
  isFirst = false;
  currentStep = 1;
  @Input() _vertical: boolean = false;
  @Input() icon! : string;
  @Input() set collapse(b: 'true' | 'false' | '') {
    this._vertical= (b == 'true') || (b == '');
  };
  constructor() {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log(`ngDoCheck: ${this.stepNumber}`);
  }

  styleClass() {
    if(!this._vertical){
      return ''
    }
   
    return 'test-1';
  }
}
