import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyDatepickerComponent } from './xy-datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { XyInputModule } from '../xy-input/xy-input.module';


@NgModule({
  declarations: [XyDatepickerComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    XyInputModule,
    MatDatepickerModule
  ],
  exports:[
    XyDatepickerComponent
  ]
})
export class XyDatepickerModule { }
