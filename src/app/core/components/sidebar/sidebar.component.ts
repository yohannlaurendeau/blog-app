import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(public authService : AuthService){

  }
  ngOnInit(): void {
  }

  items = [
    {
      titre: 'Feed',
      icon: 'home',
      path:'feed'
    },
    {
      titre: 'User Profile',
      icon: 'person',
      path:'user-profile'
    },


  ]
}
