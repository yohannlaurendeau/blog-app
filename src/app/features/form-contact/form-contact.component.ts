import { Component } from '@angular/core';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  userName: any
  password: any

  login(formValues: any){
    console.log(formValues);
  }
}
