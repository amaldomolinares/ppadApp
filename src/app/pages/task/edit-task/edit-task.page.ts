import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskapiService } from 'src/app/services/taskapi.service';
import { ToastController } from '@ionic/angular';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  //get Suplier
  supplier: any = {};

  //get
  TaskID: any;
  task;

  //post
  EndDate;
  InvoiceDate;
  Name;
  StartDate;
  Status;
  Summary;
  SupplierID;
  TotalCost;

  constructor(private route: ActivatedRoute,
              private taskProvider: TaskapiService,
              private supplierProvider: SupplierService,
              public toastController: ToastController,
              private router: Router, ) { }

  ngOnInit() {
    this.TaskID = this.route.snapshot.paramMap.get('TaskID');
    this.getTaskByTaskID();
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierProvider.getListSuppliers().subscribe(data => {
      this.supplier = data;
    });
  }

  ionViewWillEnter() {
    this.TaskID = this.route.snapshot.paramMap.get('TaskID');
    this.getTaskByTaskID();
   }

  getTaskByTaskID() {
    this.taskProvider.getTask(this.TaskID).subscribe((task: any) => {
      this.task = task;
      return (this.task);
    });
  }

  updateRepair() {
    this.taskProvider.updateTask(this.EndDate, this.InvoiceDate, this.Name, this.StartDate,
                                this.Status, this.Summary, this.SupplierID, this.TotalCost,this.TaskID).subscribe((data: any) => {
      if (data.status !== 'true') {
        this.presentToast();
        this.router.navigate(['/details-task/' + this.TaskID]);
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Repair has update',
      duration: 2000
    });
    toast.present();
    }

}
