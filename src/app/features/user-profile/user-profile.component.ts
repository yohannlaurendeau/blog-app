import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../core/model/user.model';
import { UserService } from '../../shared/user.service';
import { Subscription } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  userName: string = this.authService.currentUser!.username;
  email:string = this.authService.currentUser!.email;
  password:string = this.authService.currentUser!.password;
  sub!: Subscription;
  userTest!: User;

  constructor(public authService : AuthService, public userService : UserService) { }

  user = this.authService.currentUser;
  ngOnInit(): void {
  }
  modify(formValues: any): void{
    console.log(formValues);
    this.userTest={
      id: this.authService.currentUser.id,
      username : formValues.username,
      email : formValues.em,
      password: formValues.password

    }
    this.userService.update(this.user.id,this.userTest)
  }
}
