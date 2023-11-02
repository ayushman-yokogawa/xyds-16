import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyTabComponent} from "./xy-tab.component";
import {MatTabsModule} from "@angular/material/tabs";
import {XyTabGroupComponent} from "./xy-tab-group.component";
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    XyTabComponent,
    XyTabGroupComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    XyTabComponent,
    XyTabGroupComponent
  ]
})
export class XyTabModule { }
