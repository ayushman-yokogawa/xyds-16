import { NgModule } from '@angular/core';
import { XyAutocompleteComponent } from './xy-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { XyInputModule } from '../xy-input/xy-input.module';
import { MatIconModule } from '@angular/material/icon';
import { XySearchboxModule } from '../xy-searchbox/xy-searchbox.module';


@NgModule({
  declarations: [XyAutocompleteComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule, 
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    XyInputModule,
    MatIconModule,
    XySearchboxModule
  ],
  exports:[
    XyAutocompleteComponent,
  ]
})
export class XyAutocompleteModule { }
