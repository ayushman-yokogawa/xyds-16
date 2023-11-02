import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XySearchboxComponent} from "./xy-searchbox.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {XyInputModule} from "../xy-input/xy-input.module";
import { MatAutocompleteModule } from '@angular/material/autocomplete';


@NgModule({
  declarations: [
    XySearchboxComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    XyInputModule,
    MatAutocompleteModule
  ],
  exports: [
    XySearchboxComponent
  ],
})
export class XySearchboxModule { }
