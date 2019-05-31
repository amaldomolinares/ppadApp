import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  username = '';
  password = '';

  constructor(private authService: AuthenticationService,
              private router: Router) {
                if ((localStorage.getItem('TOKEN_KEY') !== 'null') ) {
                  this.router.navigate(['/menu']);
                }
              }

  ngOnInit() {
    this.authService.checkToken();
  }

  login() {

      this.authService.login(this.username, this.password).subscribe((data: any) => {
        localStorage.setItem('TOKEN_KEY', JSON.stringify(data.token));
        console.log(localStorage.getItem('TOKEN_KEY'));
        if (localStorage.getItem('TOKEN_KEY') !== 'null') {
          this.router.navigate(['/menu']);
        }
      });
 }


}
