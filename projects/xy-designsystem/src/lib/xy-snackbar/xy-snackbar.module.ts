import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XySnackbarComponent } from './xy-snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { XyButtonModule } from '../xy-button/xy-button.module';
import { XyInputModule } from '../xy-input/xy-input.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { XyDialogModule } from '../xy-dialog/xy-dialog.module';


@NgModule({
  declarations: [XySnackbarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    XyButtonModule,
    
  ],
  exports: [
    XySnackbarComponent,
  ]
})
export class XySnackbarModule { }
