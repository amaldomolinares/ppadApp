import { Component, OnInit } from '@angular/core';
import { VehicleapiService } from 'src/app/services/vehicleapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderapiService } from 'src/app/services/orderapi.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.page.html',
  styleUrls: ['./new-order.page.scss'],
})
export class NewOrderPage implements OnInit {

  vinNumber: any;
  vehicle: any[] = [];
  Title: string;
  Status = 'pending';
  Date: any;
  dateEnd: Date;


  customOptions: any = {
    header: 'Select Order Status'
  };
  constructor(private vehiclesProvider: VehicleapiService,
              private orderProvider: OrderapiService,
              private router: Router) { }

  ngOnInit() {
  }

  getVehicleByVinNumber() {
    this.vehiclesProvider.getVehicle(this.vinNumber).subscribe((vehicle: any) => {
      this.vehicle = vehicle;
      return (this.vehicle);
   });
 }

 saveNewOrder() {
   this.orderProvider.postNewOrder(this.vinNumber, this.Title, this.Status, this.Date).subscribe((data: any) => {
    if (data.OrderID !== 'null') {
      this.router.navigate(['/edit-order']);
    }
  });
 }



}
