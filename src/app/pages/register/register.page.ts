import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public onRegisterForm: FormGroup;
  form = {};

  // tslint:disable-next-line: variable-name

  constructor(private authService: AuthenticationService,
              private  router: Router,
              public loadingCtrl: LoadingController,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      fullName: [null, Validators.compose([
        Validators.required,
      ])],
      email: [null, Validators.compose([
        Validators.required
      ])],
      password: [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  signUp() {
    this.authService.register(this.form).subscribe(data => {
        console.log(data);
    });
    /*const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.router.navigate(['/login']);
    });*/
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }


}
