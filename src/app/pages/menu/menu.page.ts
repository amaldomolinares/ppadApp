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

  logOut() {
    localStorage.removeItem('TOKEN_KEY');
    this.router.navigate(['/login']);
    this.authService.logout();
  }

}
