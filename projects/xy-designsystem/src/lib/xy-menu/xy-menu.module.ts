import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyMenuComponent, XyMenuNodeComponent} from "./xy-menu.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {XyMenuItemComponent} from "./xy-menu-item.component";
import {MatIconModule} from "@angular/material/icon";
import {XyCheckboxModule} from "../xy-checkbox/xy-checkbox.module";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [
    XyMenuComponent,
    XyMenuItemComponent,
    XyMenuNodeComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    XyCheckboxModule,
  ],
  exports: [
    XyMenuComponent,
    XyMenuItemComponent,
    XyMenuNodeComponent
  ]
})
export class XyMenuModule { }
