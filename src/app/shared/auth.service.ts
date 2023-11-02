import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { UserService } from "./user.service";
import { DatabaseReference } from "@angular/fire/database";
import { user } from "@angular/fire/auth";
import { User } from "../core/model/user.model";

@Injectable()
export class AuthService{
  currentUser!: User | null;
  lastid!: number;
  sub! : Subscription;
  users! : User[];
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient,private userService : UserService ) {

  }

  loginUser(userName: string){
    this.sub = this.userService.getUsers().subscribe(res =>
      {
        console.log(res);
        this.users = res.filter(x => x.username === userName);
        console.log("users",this.users);
        this.currentUser = this.users[0];
        console.log("current user",this.currentUser);

      }
    )
  }
  disconnect(){
    this.currentUser = null;
  }

  isConnected(){
    console.log("currentUser",this.currentUser);
    return !!this.currentUser;
  }
}
