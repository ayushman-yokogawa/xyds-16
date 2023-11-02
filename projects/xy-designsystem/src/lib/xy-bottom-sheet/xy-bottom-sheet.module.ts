import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyBottomSheetComponent } from './xy-bottom-sheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [XyBottomSheetComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule
  ],
  exports: [
    XyBottomSheetComponent
  ]
})
export class XyBottomSheetModule { }
