import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';
import { v4 as uuid } from 'uuid';
import { User } from '../../core/model/user.model';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent{
  username: any;
  email: any;
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
      id: 20,
      username : formValues.userName,
      email : formValues.password,
      name : formValues.name,
      address:{
        street: formValues.street,
        suite: formValues.suite,
        city: formValues.city,
        zipcode: formValues.zipcode,
      }
    }
    console.log('jappelle',formValues);
    this.userService.addUser(this.userTest).subscribe(
      (response ) => console.log(response)
    );
    this.userService.getUsers().subscribe(
      (response ) => console.log("reponse users get",response)
    );
    this.router.navigate(['feed'])
  }
}
