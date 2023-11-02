import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyBadgeComponent } from './xy-badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import {XyButtonModule} from "../xy-button/xy-button.module";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    XyBadgeComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    XyButtonModule,
    MatButtonModule
  ],
  exports:[
    XyBadgeComponent,
  ]
})
export class XyBadgeModule { }
