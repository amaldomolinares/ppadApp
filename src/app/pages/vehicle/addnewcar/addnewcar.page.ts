import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleapiService } from '../../../services/vehicleapi.service';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.page.html',
  styleUrls: ['./addnewcar.page.scss'],
})
export class AddnewcarPage implements OnInit {

  vinNumber = '';

  constructor(private vehicleService: VehicleapiService) { }

  ngOnInit() {
  }

  vehicleSearch() {

    this.vehicleService.vehicleSearch(this.vinNumber).subscribe((data: any) => {
      console.log(data);
    });
  }

}
