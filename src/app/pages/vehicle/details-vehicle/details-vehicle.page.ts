import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { VehicleapiService } from 'src/app/services/vehicleapi.service';
import { AddTaskPage } from '../../task/add-task/add-task.page';

@Component({
  selector: 'app-details-vehicle',
  templateUrl: './details-vehicle.page.html',
  styleUrls: ['./details-vehicle.page.scss'],
})
export class DetailsVehiclePage implements OnInit {

  VehicleID: any;
  vehicle: any[] = [];

  constructor(private vehiclesProvider: VehicleapiService,
              public toastController: ToastController,
              private router: Router,
              private route: ActivatedRoute,
              public modalController: ModalController) { }

  ngOnInit() {
    this.VehicleID = this.route.snapshot.paramMap.get('VehicleID');
    this.getVehicleByVinNumber();
  }

  ionViewWillEnter() {
    this.VehicleID = this.route.snapshot.paramMap.get('VehicleID');
    this.getVehicleByVinNumber();
}

  getVehicleByVinNumber() {
    console.log(this.VehicleID);
     this.vehiclesProvider.getVehicle(this.VehicleID).subscribe((vehicle: any) => {
       this.vehicle = vehicle;
       console.log(this.vehicle);
       return (this.vehicle);
    });
  }

  EditVehicle() {
    this.router.navigate(['/edit-vehicle/' + this.VehicleID]);
   }

   async AddTaskToVehicle() {
    const modal = await this.modalController.create({
      component: AddTaskPage,
      componentProps: {
       VehicleID: this.VehicleID
      }
    });
    modal.present();
    const response = await modal.onDidDismiss();
    if (response) {
      this.getVehicleByVinNumber();
    }
  }

}
