import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { User } from '../../core/model/user.model';
import { v4 as uuid } from 'uuid';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent{
  username = new FormControl();
  email = new FormControl();
  password= new FormControl();
  name: any;
  street: any;
  suite: any;
  city: any;
  zipcode: any;
  userCreation!: User;
  constructor(private authService: AuthService){

  }

  create(): void{
    this.userCreation={
      id: uuid(),
      username : this.username.value,
      email : this.email.value,
      password : this.password.value,
    }
    console.log("this mail value");
    console.log(this.email.value);
    console.log("this user value");
    console.log(this.userCreation);
    this.authService.signUp(this.userCreation);

  }
}
