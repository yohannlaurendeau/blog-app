import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { UserService } from "./user.service";
import { DatabaseReference } from "@angular/fire/database";
import { user } from "@angular/fire/auth";
import { User } from "../core/model/user.model";

@Injectable()
export class AuthService{
  currentUser: User = {
    id:"",
    username:"",
    email:"",
    password:""
  };
  lastid!: number;
  sub! : Subscription;
  users! : User[];
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient,private userService : UserService ) {

  }

  loginUser(userName: string, password: string){
    this.sub = this.userService.getAll().subscribe(res =>
      {
        this.users = res.filter(x => x.username === userName && x.password == password);
        console.log(this.users);
        this.currentUser = this.users[0];

      }
    )
  }
  disconnect(){
    this.currentUser =  {
      id:"",
      username:"",
      email:"",
      password:""
    }
  }

  isConnected(){
    if(this.currentUser.id.length > 0){
      return true;
    };
    return false;
  }
}
