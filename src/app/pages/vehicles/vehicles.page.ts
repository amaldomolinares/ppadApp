import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewCar(){
      this.router.navigate(['/addnewcar']);
  }

}
 