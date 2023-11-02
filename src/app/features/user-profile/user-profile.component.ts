import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../core/model/user.model';
import { UserService } from '../../shared/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnChanges{
  userName: string = this.authService.currentUser!.username;
  name: string = this.authService.currentUser!.name;
  email:string = this.authService.currentUser!.email;
  sub!: Subscription;
  userTest!: User;
  user!: User
  constructor(public authService : AuthService, public userService : UserService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.user = this.authService.currentUser!;
  }
  modify(formValues: any): void{
    console.log(formValues);
    this.userTest={
      id : this.user!.id,
      name : formValues.name,
      username : formValues.username,
      email : formValues.em

    }
    console.log('jappelle',formValues);
    this.user = this.userTest;
  }
}
