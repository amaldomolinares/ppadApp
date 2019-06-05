import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleapiService } from '../../../services/vehicleapi.service';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.page.html',
  styleUrls: ['./addnewcar.page.scss'],
})
export class AddnewcarPage implements OnInit {

  vinNumber: any;
  vehicle: any[] = [];

  constructor(private vehiclesProvider: VehicleapiService,
              private router: Router) { }

  ngOnInit() {
  }

  getVehicleByApi() {
    this.vehiclesProvider.getVehicleApi(this.vinNumber).subscribe((vehicle: any) => {
      this.vehicle = vehicle;
      return (this.vehicle);
   });
 }

}
