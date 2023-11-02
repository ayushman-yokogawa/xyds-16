import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XySlideToggleComponent} from "./xy-slide-toggle.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    XySlideToggleComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    XySlideToggleComponent
  ],
})
export class XySlideToggleModule {
}
