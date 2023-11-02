import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyTopAppBarComponent} from "./xy-top-app-bar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import {XyButtonModule} from "../xy-button/xy-button.module";
import {MatIconModule} from "@angular/material/icon";
import { XySearchboxModule } from '../xy-searchbox/xy-searchbox.module';


@NgModule({
  declarations: [
    XyTopAppBarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    XyButtonModule,
    MatIconModule,
    XySearchboxModule
  ],
  exports: [
    XyTopAppBarComponent
  ],
})
export class XyTopAppBarModule { }
