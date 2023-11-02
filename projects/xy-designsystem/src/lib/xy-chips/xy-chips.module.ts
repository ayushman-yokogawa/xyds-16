import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { XyChipsComponent } from './xy-chips.component';
import { XyChipsListComponent } from './xy-chips-list/xy-chips-list.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [XyChipsComponent, XyChipsListComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports:[
    XyChipsComponent,
    XyChipsListComponent
  ]
})
export class XyChipsModule { }
