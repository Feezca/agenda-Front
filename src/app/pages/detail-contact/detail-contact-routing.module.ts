import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailContactComponent } from './detail-contact.component';

const routes: Routes = [
  {
    path:"",
    component:DetailContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailContactRoutingModule { }
