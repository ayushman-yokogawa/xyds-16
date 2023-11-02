import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { XyStepComponent } from "./xy-step/xy-step.component";

@Component({
  selector: "xy-stepper",
  templateUrl: "./xy-stepper.component.html",
  styleUrls: ["./xy-stepper.component.scss"],
  
})
export class XyStepperComponent {
  private currentStep: number = 2;
  private internalSteps!: QueryList<XyStepComponent>;

  @Input() counter = 1;
  @Output() counterChange = new EventEmitter<number>();

  ngOnChanges() {
    this.currentStep = this.counter;
    if (this.internalSteps) {
      this.setChildSteps();
    }
  }

  @ContentChildren(XyStepComponent)
  set stepsContent(steps: QueryList<XyStepComponent>) {
    if (steps) {
      this.internalSteps = steps;
      this.internalSteps.last.isLast = true;
      this.internalSteps.first.isFirst = true;
      this.registerSteps();
    }
  }

  nextStep() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  prevStep() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }

  setStep(step: number | undefined) {
    this.counterChange.emit(step);
  }

  private registerSteps(): void {
    this.internalSteps
      .toArray()
      .forEach((step: XyStepComponent, idx: number) => {
        step.currentStep = this.currentStep;
        step.stepNumber = idx + 1;
      });
  }

  @Input() _vertical: boolean = false;
  private setChildSteps(): void {
    this.internalSteps
      .toArray()
      .forEach((step: XyStepComponent, idx: number) => {
        step.currentStep = this.currentStep;
      });
  }
  @Input() set vertical(b: "true" | "false" | "") {
    this._vertical = b == "true" || b == "";
  }
  styleClass() {
    if (this._vertical) {
      return "vertical-stepper";
    }

    return "";
  }
}
