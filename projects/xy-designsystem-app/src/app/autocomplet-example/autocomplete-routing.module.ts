import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompletExampleComponent } from './autocomplet-example.component';
import { Child1ExampleComponent } from '../breadcrumb-example/breadcrumb-child-components/child1-example/child1-example.component';

const routes: Routes = [
  {
    path: '',
    component: AutocompletExampleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoCompleteRoutingModule { }