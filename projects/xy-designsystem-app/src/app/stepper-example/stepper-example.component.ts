import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper-example',
  templateUrl: './stepper-example.component.html',
  styleUrls: ['./stepper-example.component.scss']
})
export class StepperExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 
  show = false;
  counter = 1;
  counter2 = 1;
  counter3 = 1;
  nextStep() {
    this.counter++;
  }

  prevStep() {
    this.counter--;
  }

  setStep(step: number) {
    this.counter = step;
  }

  nextStep2() {
    // this.stepper.nextStep();
    this.counter2++;
  }

  prevStep2() {
    // this.stepper.prevStep();
    this.counter2--;
  }

  setStep2(step: number) {
    // this.stepperRef.setStep(step);
    this.counter2 = step;
  }

  nextStep3() {
    // this.stepper.nextStep();
    this.counter3++;
  }

  prevStep3() {
    // this.stepper.prevStep();
    this.counter3--;
  }

  setStep3(step: number) {
    // this.stepperRef.setStep(step);
    this.counter3 = step;
  }
}
