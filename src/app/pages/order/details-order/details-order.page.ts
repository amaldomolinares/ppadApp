import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderapiService } from 'src/app/services/orderapi.service';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.page.html',
  styleUrls: ['./details-order.page.scss'],
})
export class DetailsOrderPage implements OnInit {

order: any;

  constructor(private orderProvider: OrderapiService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
   this.order = this.route.snapshot.paramMap.get('id');
   console.log(this.order)
  }

}
