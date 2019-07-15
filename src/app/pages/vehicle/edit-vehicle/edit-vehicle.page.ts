import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { VehicleapiService } from 'src/app/services/vehicleapi.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.page.html',
  styleUrls: ['./edit-vehicle.page.scss'],
})
export class EditVehiclePage implements OnInit {

  VehicleID: any;
  vehicle: any[] = [];
  make;
  model;
  modelYear;
  color;
  fuelType;
  transmission;
  engine;
  trim;
  OriginalCost;
  SellingPrice;
  PurchaseDate;
  Status;
  PurchaseMiles;
  CurrentMiles;
  StockNumber;

  constructor(private vehiclesProvider: VehicleapiService,
              public toastController: ToastController,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.VehicleID = this.route.snapshot.paramMap.get('VehicleID');
    this.getVehicleByVinNumber();
  }

  ionViewWillEnter() {
    this.VehicleID = this.route.snapshot.paramMap.get('VehicleID');
    this.getVehicleByVinNumber();
   }

  getVehicleByVinNumber() {
    this.vehiclesProvider.getVehicle(this.VehicleID).subscribe((vehicle: any) => {
      this.vehicle = vehicle;
      return (this.vehicle);
   });
 }

 updateVehicle() {
  this.vehiclesProvider.updateVehicle(this.make, this.model, this.modelYear, this.color,
                                      this.fuelType, this.transmission, this.engine, this.trim,
                                      this.VehicleID, this.OriginalCost, this.SellingPrice, this.PurchaseDate,
                                      this.Status, this.PurchaseMiles, this.CurrentMiles, this.StockNumber,).subscribe((data: any) => {
    if (data.status !== 'true') {
      this.presentToast();
      this.router.navigate(['/details-vehicle/' + this.VehicleID]);
    }
  });
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Vehicle has update',
    duration: 2000
  });
  toast.present();
  }

}
