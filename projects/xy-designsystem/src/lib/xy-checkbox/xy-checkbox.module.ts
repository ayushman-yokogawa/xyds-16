import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {XyCheckboxComponent} from "./xy-checkbox.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    XyCheckboxComponent,
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    XyCheckboxComponent
  ]
})
export class XyCheckboxModule { }
