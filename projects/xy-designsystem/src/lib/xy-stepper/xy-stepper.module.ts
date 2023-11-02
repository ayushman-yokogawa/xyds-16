import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyStepperComponent } from './xy-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from "@angular/material/toolbar";
import { XyStepComponent } from './xy-step/xy-step.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [XyStepperComponent, XyStepComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[
    XyStepperComponent,
    XyStepComponent
  ]
})
export class XyStepperModule { }
