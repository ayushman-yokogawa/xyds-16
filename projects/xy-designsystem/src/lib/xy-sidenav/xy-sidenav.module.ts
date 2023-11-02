import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XySidenavComponent} from "./xy-sidenav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {RouterModule} from "@angular/router";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {XySidenavContainerComponent} from "./xy-sidenav-container.component";
import {XySidenavContentComponent} from "./xy-sidenav-content.component";
import {XySidenavItemComponent} from "./xy-sidenav-item.component";
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { XyButtonModule } from '../xy-button/xy-button.module';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    XySidenavComponent,
    XySidenavContainerComponent,
    XySidenavContentComponent,
    XySidenavItemComponent,
    CustomSidenavComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    DragDropModule,
    RouterModule,
    MatSidenavModule,
    XyButtonModule,
    MatExpansionModule
  ],
  exports: [
    XySidenavComponent,
    XySidenavContainerComponent,
    XySidenavContentComponent,
    XySidenavItemComponent,
    CustomSidenavComponent
  ]
})
export class XySidenavModule { }
