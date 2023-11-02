import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from "@angular/material/select";
import {XySelectComponent} from "./xy-select.component";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {XyOptionComponent} from "./xy-option.component";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    XySelectComponent,
    XyOptionComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    XySelectComponent,
    XyOptionComponent
  ],
})
export class XySelectModule {
}
