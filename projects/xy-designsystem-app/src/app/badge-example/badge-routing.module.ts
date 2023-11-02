import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeExampleComponent } from './badge-example.component';




const routes: Routes = [
  {
    path: '',
    component: BadgeExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgeRoutingModule { }
