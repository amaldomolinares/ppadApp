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
 registerUser = environment.site_url + environment.User_register;

  authenticationState = new BehaviorSubject(null);

  constructor(private router: Router, private plt: Platform, public http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
      if (localStorage.getItem('TOKEN_KEY')) {
        this.authenticationState.next(true);
      } else if (!localStorage.getItem('TOKEN_KEY')) {
        this.authenticationState.next(false);
      }
  }

  login(Email, Password) {
    const data = {
      Email,
      Password
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('X-API-KEY', 'PPACD@123');
    return this.http.post(this.jwt, data, { headers });
   }


  logout() {
    this.authenticationState.next(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  register(form) {
    console.log(form);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    //headers.set('X-API-KEY', 'PPACD@123');
    return this.http.post(this.registerUser, form, { headers });
  }

}
