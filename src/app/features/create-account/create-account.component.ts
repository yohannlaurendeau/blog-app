import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { User } from '../../core/model/user.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent{
  username: any;
  email: any;
  password: any;
  name: any;
  street: any;
  suite: any;
  city: any;
  zipcode: any;
  userTest!: User;
  constructor(private authService: AuthService,private router : Router, private userService: UserService){

  }

  create(formValues: any): void{
    this.userTest={
      id: uuid(),
      username : formValues.username,
      email : formValues.password,
      password : formValues.password
    }
    this.userService.create(this.userTest);
    this.authService.loginUser(this.userTest.username,this.userTest.password);
    this.router.navigate(['feed'])
  }
}
