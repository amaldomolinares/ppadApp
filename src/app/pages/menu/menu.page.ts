import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Add Vehicles',
      url: '/menu/addnewcar'
    },
    {
      title: 'Vehicles',
      url: '/menu/vehicles'
    },
    {
      title: 'Add Suppliers',
      url: '/menu/addsupplier'
    },
    {
      title: 'Suppliers',
      url: '/menu/suppliers'
    }
  ];

  selectedPath = '';

  constructor(private authService: AuthenticationService,
              private router: Router) {
      this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      });
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.authenticationState.subscribe(state => {
      if (state === true) {
        this.router.navigate(['/menu']);
      } else if (state === false ) {
        this.router.navigate(['/login']);
      }
    });
  }

  logOut() {
    localStorage.removeItem('TOKEN_KEY');
    this.authService.logout();
  }

}
