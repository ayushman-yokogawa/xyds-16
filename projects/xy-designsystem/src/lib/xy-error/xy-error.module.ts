import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {XyErrorComponent} from "./xy-error.component";

@NgModule({
  declarations: [
    XyErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    XyErrorComponent,
  ]
})
export class XyErrorModule { }
