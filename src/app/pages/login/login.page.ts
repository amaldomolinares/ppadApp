import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  Email = '';
  Password = '';

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

      this.authService.login(this.Email, this.Password).subscribe((data: any) => {
        localStorage.setItem('TOKEN_KEY', JSON.stringify(data.token));
        console.log(data);
        if (localStorage.getItem('TOKEN_KEY') !== 'null') {
          this.router.navigate(['/menu']);
        }
      });
 }


}
