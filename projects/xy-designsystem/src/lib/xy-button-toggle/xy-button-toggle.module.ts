import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {XyButtonToggleComponent} from "./xy-button-toggle.component";
import {XyButtonToggleGroupComponent} from "./xy-button-toggle-group.component";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    XyButtonToggleComponent,
    XyButtonToggleGroupComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    XyButtonToggleComponent,
    XyButtonToggleGroupComponent
  ],
})
export class XyButtonToggleModule {
}
