import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatRadioModule} from "@angular/material/radio";
import {XyRadioComponent} from "./xy-radio.component";
import {XyRadioGroupComponent} from "./xy-radio-group.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    XyRadioComponent,
    XyRadioGroupComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    XyRadioComponent,
    XyRadioGroupComponent
  ],
})
export class XyRadioModule {
}
