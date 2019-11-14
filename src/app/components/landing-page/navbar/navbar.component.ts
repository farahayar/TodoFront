import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { UserServicesService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url = "./../assets/logo.png";

  constructor(private router: Router, private _us: UserServicesService) { }
  isLogged: boolean = false;

  ngOnInit() {
    if (this._us.isLoggedUser() || this._us.isLoggedAdmin()) {
      this.isLogged = true;
    }
    else
      this.isLogged = false;

  }



  conn() {
    this.router.navigateByUrl('/login');
    // this.isLogged=false;

  }

  inscription() {
    this.router.navigateByUrl('/inscription');
    // this.isLogged=true;
  }

  deco() {
    localStorage.removeItem('token');
    this.isLogged = false;
    this.router.navigateByUrl('/home');

  }

}
