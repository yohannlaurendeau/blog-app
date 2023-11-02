import { Component } from '@angular/core';
import { SidenavService } from '../../../shared/sidenav.service';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private sidenav: SidenavService,public authService : AuthService,private router : Router) { }
  toggleRightSidenav() {
    this.sidenav.toggle();
 }
  deconnecter(){
    this.authService.disconnect();
    this.router.navigate(['connect']);
  }
}
