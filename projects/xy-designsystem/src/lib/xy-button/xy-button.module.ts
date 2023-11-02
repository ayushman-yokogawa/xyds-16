import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {XyButtonComponent} from "./xy-button.component";


@NgModule({
  declarations: [
    XyButtonComponent,
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatRippleModule,
        MatIconModule
    ],
  exports: [
    XyButtonComponent
  ]
})
export class XyButtonModule { }
