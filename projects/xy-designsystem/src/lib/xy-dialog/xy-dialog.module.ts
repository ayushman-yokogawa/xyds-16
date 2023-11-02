import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyDialogComponent} from "./xy-dialog.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {XyButtonModule} from "../xy-button/xy-button.module";

@NgModule({
  declarations: [
    XyDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    XyButtonModule
  ],
  exports: [
    XyDialogComponent,
  ]
})
export class XyDialogModule { }
