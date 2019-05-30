import { Component } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OrderapiService } from 'src/app/services/orderapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss'],
})
export class OrdersPage {

  orders;

  constructor(private orderProvider: OrderapiService,
              private router: Router) {
    this.orderProvider.loadListOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    });
  }

  loadOrders(event) {
    setTimeout(() => {
      event.target.complete();
      if (this.orders.length === 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  addNewOrder(){
    this.router.navigate(['/new-order']);
}

}
