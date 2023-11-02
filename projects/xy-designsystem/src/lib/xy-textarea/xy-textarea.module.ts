import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyTextareaComponent} from "./xy-textarea.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {XyHintModule} from "../xy-hint/xy-hint.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    XyTextareaComponent,
  ],
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        XyHintModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule
    ],
  exports: [
    XyTextareaComponent,
  ]
})
export class XyTextareaModule { }
