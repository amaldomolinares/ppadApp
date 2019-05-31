import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleapiService } from 'src/app/services/vehicleapi.service';

@Component({
  selector: 'app-details-vehicle',
  templateUrl: './details-vehicle.page.html',
  styleUrls: ['./details-vehicle.page.scss'],
})
export class DetailsVehiclePage implements OnInit {

  vinNumber: any;

  constructor(private vehiclesProvider: VehicleapiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.vinNumber = this.route.snapshot.paramMap.get('vinNumber');
    console.log(this.vinNumber);
  }

}
