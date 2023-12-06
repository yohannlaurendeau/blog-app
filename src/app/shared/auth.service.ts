import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { UserService } from "./user.service";
import { DatabaseReference } from "@angular/fire/database";
import { user } from "@angular/fire/auth";
import { User } from "../core/model/user.model";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

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
  constructor( private http: HttpClient,private userService : UserService,private afAuth: AngularFireAuth,private router : Router) {

  }

  signUp(user:User){
    this.afAuth.createUserWithEmailAndPassword(user.email,user.password).then(() => {
      console.log("reussite");
      this.userService.create(user);
      this.router.navigate(['feed']);
    })
    .catch((error) => {
      //Error occured
    })
  }

  login(email:string,password:string){
    this.afAuth.signInWithEmailAndPassword(email,password).then(() => {
      console.log("connexion réussi");
      this.userService.getAll().subscribe(res =>
        {
          this.users = res.filter(x => x.email === email && x.password == password);
          console.log(this.users);
          this.currentUser = this.users[0];

        }
      )
    })
    .catch((error) => {
      //Error occured
    })
  }

  logOut(){
    this.afAuth.signOut().then(() => {
      this.currentUser =  {
        id:"",
        username:"",
        email:"",
        password:""
      }
    })
    .catch((error) => {

    })
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
