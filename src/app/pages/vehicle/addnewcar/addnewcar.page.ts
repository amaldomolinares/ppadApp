import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { VehicleapiService } from '../../../services/vehicleapi.service';
import { ToastController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.page.html',
  styleUrls: ['./addnewcar.page.scss'],
})
export class AddnewcarPage implements OnInit, OnDestroy {

    private routerEvents: any;
    private previousUrl: string;
    private currentUrl: string;
    private canGoBack: boolean;

  VehicleID: any;
  vehicle: any[] = [];
  vinNumber;
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
              private router: Router,
              public toastController: ToastController,
              private ionRouterOutlet: IonRouterOutlet) { }

              ngOnInit() {
                this.canGoBack    = this.ionRouterOutlet.canGoBack();
                this.currentUrl   = this.router.url;
                this.routerEvents = this.router.events.subscribe(event => {
                    if (event instanceof NavigationEnd) {
                        this.previousUrl = this.currentUrl;
                        this.currentUrl  = event.url;
                    }
                });
            }

            ngOnDestroy() {
                this.routerEvents.unsubscribe();
            }

  getVehicleByApi() {
    this.vehiclesProvider.getVehicleApi(this.vinNumber).subscribe((vehicle: any) => {
      this.vehicle = vehicle;
      return (this.vehicle);
   });
 }

 createVehicle() {
  this.vehiclesProvider.postVehicle(this.make, this.model, this.modelYear, this.color,
                                      this.fuelType, this.transmission, this.engine, this.trim,
                                      this.OriginalCost, this.SellingPrice, this.PurchaseDate,
                                      this.Status, this.PurchaseMiles, this.CurrentMiles, this.StockNumber, this.vinNumber).subscribe((data: any) => {
                                        if (data.Data.VehicleID !== 'null') {
      this.presentToast();
      this.router.navigate(['/details-vehicle/' + data.Data.VehicleID]);
    }
  });
}

async presentToast() {
  const toast = await this.toastController.create({
    message: 'Vehicle Create',
    duration: 2000
  });
  toast.present();
  }

}
