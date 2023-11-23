import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent {
  form: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authService: AuthService,private router : Router){

  }

  login(){
    if(this.form.valid){
      console.log(this.form.value.userName);
      this.authService.loginUser(this.form.value.userName,this.form.value.password);
      this.router.navigate(['feed'])
    }

  }
}
