import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderapiService {

  Orders = environment.site_get_list_orders + environment.get_list_orders;

  constructor(private router: Router,
              public http: HttpClient) { }

  loadListOrders(){
    return this.http.get(this.Orders);
  }
}
