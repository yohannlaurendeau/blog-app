import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConnectComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ConnectModule { }
