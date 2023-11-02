import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {XyInputComponent} from "./xy-input.component";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {XyHintModule} from "../xy-hint/xy-hint.module";
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from "@angular/material/legacy-progress-spinner";
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    XyInputComponent,
  ],
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        XyHintModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
  exports: [
    XyInputComponent,
  ]
})
export class XyInputModule { }
