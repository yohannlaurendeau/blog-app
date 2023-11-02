import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormContactRoutingModule } from './form-contact-routing.module';
import { FormContactComponent } from './form-contact.component';



@NgModule({
  declarations: [
    FormContactComponent
  ],
  imports: [
    CommonModule,
    FormContactRoutingModule,
    SharedModule
  ]
})
export class FormContactModule { }
