import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {XyTreeComponent} from "./xy-tree.component";
import {MatTreeModule} from "@angular/material/tree";
import {MatRippleModule} from "@angular/material/core";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {XyButtonModule} from "../xy-button/xy-button.module";
import { MatTooltipModule } from '@angular/material/tooltip';
import { TreeControlService } from './tree-control.service';


@NgModule({
  declarations: [
    XyTreeComponent
  ],
    imports: [
        CommonModule,
        MatTreeModule,
        MatIconModule,
        MatRippleModule,
        DragDropModule,
        XyButtonModule,
        MatTooltipModule
    ],
  exports: [
    XyTreeComponent
  ],
})
export class XyTreeModule { }
