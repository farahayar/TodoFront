import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user'
import { JwtHelperService } from '@auth0/angular-jwt';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  //http fiha tt les fonction prghedif illy ykhaliwna namlou communication m3a wev service
  private userInscriptionUrl = "http://localhost:3000/user/inscription";
  private userConnectionUrl = "http://localhost:3000/user/connection";
  private getUsersUrl = "http://localhost:3000/user/getAllUser";
  private activateUrl = "http://localhost:3000/user/acitvate/";

  constructor(private http: HttpClient) { }

  userIncription(user: User) {
    return this.http.post<any>(this.userInscriptionUrl, user);
  }


  userConnection(user: User) {
    return this.http.post<any>(this.userConnectionUrl, user);
  }

  getUsers() {
    return this.http.get<any>(this.getUsersUrl);

  }

  activateUser(id: string) {
    return this.http.put<any>(this.activateUrl + id, id);

  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isLoggedUser() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log(decodedLogin);


    if (token) {
      
      if (decodedLogin.statut === "user") {
        return true;
      }

    }
    return false
  }

  isLoggedAdmin() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    const decodedLogin = helper.decodeToken(token);
    console.log(decodedLogin);



    if (token) {
     
      if (decodedLogin.statut === "admin") {
        return true;
      }

    }
    return false
  }

}
