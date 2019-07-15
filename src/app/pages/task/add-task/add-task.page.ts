import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { TaskapiService } from 'src/app/services/taskapi.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  supplier: any = {};

  VehicleID;
  EndDate;
  InvoiceDate;
  Name;
  StartDate;
  Status;
  Summary;
  SupplierID;
  TotalCost;

  constructor(private navParams: NavParams,
              public modalController: ModalController,
              private taskProvider: TaskapiService,
              private supplierProvider: SupplierService,
              public toastController: ToastController) { }

  ngOnInit() {
    this.VehicleID = this.navParams.get('VehicleID');
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierProvider.getListSuppliers().subscribe(data => {
      this.supplier = data;
      console.log(this.supplier);
    });
  }

  saveNewTask() {
    this.taskProvider.postNewtask(this.VehicleID, this.EndDate, this.InvoiceDate, this.Name, this.StartDate,
                                  this.Status, this.Summary, this.SupplierID, this.TotalCost).subscribe((task: any) => {
      if (task.Status !== 'true') {
        this.presentToast();
        this.modalController.dismiss();
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Create New Repair',
      duration: 2000
    });
    toast.present();
    }

    close() {
      this.modalController.dismiss();
    }

}
