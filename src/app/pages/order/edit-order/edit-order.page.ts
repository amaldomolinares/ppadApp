import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.page.html',
  styleUrls: ['./edit-order.page.scss'],
})
export class EditOrderPage implements OnInit {

  vinNumber = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.vinNumber = this.route.snapshot.paramMap.get('vinNumber');
    console.log(this.vinNumber);
  }

}
