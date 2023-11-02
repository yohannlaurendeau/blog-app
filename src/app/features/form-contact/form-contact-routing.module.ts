import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContactComponent } from './form-contact.component';


const routes: Routes = [
  {
    path:'',
    component: FormContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormContactRoutingModule { }
