import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const UserID = localStorage.getItem('UserID');
const OfficeID = localStorage.getItem('OfficeID');

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  Orders = environment.site_url + environment.get_list_orders;
  OrderbyId = environment.site_url + environment.get_list_order_by_id;
  NewOrder = environment.site_url + environment.post_add_new_order;
  UpdateOrder = environment.site_url + environment.Update_order_by_id;

  constructor(private router: Router,
              public http: HttpClient) { }

  loadListOrders() {
    return this.http.get(this.Orders);
  }

  getOrderId(order) {
    return this.http.get(this.OrderbyId + '/' + order);
  }

  postNewOrder( vinNumber, Title, Status, Date) {
    const data = {
      vinNumber,
      Title,
      Status,
      Date,
      UserID,
      OfficeID
    };
    console.log(data);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.NewOrder, data, { headers });
   }

   updateOrder(Status, OrderID) {
     const data = {
       Status,
       UserID
     };
     const headers = new HttpHeaders();
     headers.set('Content-Type', 'application/json');
     return this.http.post(this.UpdateOrder + '/' + OrderID, data, { headers });
   }
}
