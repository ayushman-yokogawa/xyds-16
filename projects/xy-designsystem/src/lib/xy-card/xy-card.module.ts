import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyCardComponent} from "./xy-card.component";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {XyButtonModule} from "../xy-button/xy-button.module";
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    XyCardComponent,
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,
        XyButtonModule,
        MatTooltipModule
    ],
  exports: [
    XyCardComponent
  ]
})
export class XyCardModule { }
