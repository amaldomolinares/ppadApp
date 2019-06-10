import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { TaskapiService } from 'src/app/services/taskapi.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  OrderID;
  Department;
  Name;
  Status;
  StartDate;
  Summary;

  constructor(private navParams: NavParams,
              public modalController: ModalController,
              private taskProvider: TaskapiService,
              public toastController: ToastController, ) { }

  ngOnInit() {
    this.OrderID = this.navParams.get('orderID');
  }

  saveNewTask() {
    this.taskProvider.postNewtask(this.OrderID, this.Name, this.Status, this.StartDate, this.Summary).subscribe((task: any) => {
      if (task.Status !== 'true') {
        this.presentToast();
        this.modalController.dismiss();
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Create new task',
      duration: 2000
    });
    toast.present();
    }

}
