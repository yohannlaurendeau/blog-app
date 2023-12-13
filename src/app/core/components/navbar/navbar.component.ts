import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../../../shared/sidenav.service';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor( private sidenav: SidenavService,public authService : AuthService,private router : Router,private auth : AuthService) { }
  ngOnInit(): void {
    this.authService.isConnectedV2();
  }
  toggleRightSidenav() {
    this.sidenav.toggle();
 }
  deconnecter(){
    this.authService.logOut();
    this.router.navigate(['connect']);
  }
}
