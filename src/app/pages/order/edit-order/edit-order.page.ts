import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, ModalController } from '@ionic/angular';
import { OrderapiService } from 'src/app/services/orderapi.service';
import { AddTaskPage } from '../../task/add-task/add-task.page';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.page.html',
  styleUrls: ['./edit-order.page.scss'],
})
export class EditOrderPage implements OnInit {

  OrderID: string;
  orderData: any[] = [];
  Status: any;
  statusOptions: any = {
    header: 'Select Order Status'
  };

  constructor(private orderProvider: OrderapiService,
              public toastController: ToastController,
              private route: ActivatedRoute,
              private router: Router,
              public modalController: ModalController
              ) { }

  ngOnInit() {
    this.OrderID = this.route.snapshot.paramMap.get('id');
    this.getOrderById();
  }

  ionViewWillEnter() {
    this.OrderID = this.route.snapshot.paramMap.get('id');
    this.getOrderById();
   }

  getOrderById() {
    this.orderProvider.getOrderId(this.OrderID).subscribe((data: any) => {
      this.orderData = data;
      console.log(this.orderData);
      return (this.orderData);
   });
 }

  UpdateOrder() {
    this.orderProvider.updateOrder(this.Status, this.OrderID).subscribe((data: any) => {
      if (data.status !== 'TRUE') {
        this.presentToast();
        this.router.navigate(['/details-order/' + this.OrderID]);
      }
    });
 }

 async presentToast() {
  const toast = await this.toastController.create({
    message: 'Order has update',
    duration: 2000
  });
  toast.present();
  }

  async AddTaskToOrder() {
    const modal = await this.modalController.create({
      component: AddTaskPage,
      componentProps: {
       orderID: this.OrderID
      }
    });
    modal.present();
    const response = await modal.onDidDismiss();
    if (response) {
      this.getOrderById();
    }
  }

}
