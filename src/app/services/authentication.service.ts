import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const token = localStorage.getItem('TOKEN_KEY');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 jwt = environment.site_url + environment.User_login;

  authenticationState = new BehaviorSubject(null);

  constructor(private router: Router, private plt: Platform, public http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
      if (token) {
        this.authenticationState.next(true);
        console.log(localStorage.getItem('TOKEN_KEY'));
      } else if (!token) {
        this.authenticationState.next(false);
        console.log('No hay token');
      }
  }

  login(Email, Password) {
    const data = {
      Email,
      Password
    };
    console.log(data);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('X-API-KEY', 'PPACD@123');
    return this.http.post(this.jwt, data, { headers });
   }


  logout() {
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  register() {

  }

}
