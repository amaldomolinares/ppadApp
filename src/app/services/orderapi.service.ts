import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  token = localStorage.getItem('TOKEN_KEY');

  Orders = environment.site_get_list_orders + environment.get_list_orders;
  NewOrder = environment.site_url + environment.post_add_new_order;

  constructor(private router: Router,
              public http: HttpClient) { }

  loadListOrders() {
    return this.http.get(this.Orders);
  }

  getOrderId(order) {
    return this.http.get(this.Orders + order);
  }

  postNewOrder(Title, Status, vinNumber, Date) {
    const data = {
      Title,
      Status,
      vinNumber,
      Date
    };
    const headers = new HttpHeaders();
    headers.set('Token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJTdGF0dXMiOiJCIiwiVXNlcklEIjoibWppbWVuZXoifQ.ZMVPqQtc2PsCNlhP3XTkKlVBbqX1HHMhVzJ6Mi69b40');
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.NewOrder, data, { headers });
   }
}
