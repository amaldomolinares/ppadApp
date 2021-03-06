import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { VehicleapiService } from 'src/app/services/vehicleapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {

  vehicles: any = {};


  constructor(private vehiclesProvider: VehicleapiService,
              private router: Router) {
              }

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehiclesProvider.getVehiclesList().subscribe(data => {
      this.vehicles = data;
    });
  }

  addNewCar() {
      this.router.navigate(['/addnewcar']);
  }
}
