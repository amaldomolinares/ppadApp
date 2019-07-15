import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  Email = '';
  Password = '';

  constructor(private authService: AuthenticationService,
              private router: Router,
              public alertController: AlertController) {

                this.authService.authenticationState.subscribe(state => {
                  if (state === true) {
                    this.router.navigate(['/menu']);
                  } else if (state === false ) {
                    this.router.navigate(['/login']);;
                  }
                });
              }

  ngOnInit() {
    this.authService.checkToken();
  }

  login() {
      this.authService.login(this.Email, this.Password).subscribe((data: any) => {
        localStorage.setItem('TOKEN_KEY', JSON.stringify(data.data));
        if (!localStorage.getItem('TOKEN_KEY')) {
          this.presentAlert();
        } else {
          this.authService.authenticationState.next(true);
          this.router.navigate(['/menu']);
        }
      });
 }

 async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Alert',
    subHeader: 'Subtitle',
    message: 'This is an alert message.',
    buttons: ['OK']
  });

  await alert.present();
}
}
