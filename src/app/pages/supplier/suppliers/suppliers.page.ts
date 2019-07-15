import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { VehicleapiService } from 'src/app/services/vehicleapi.service';
import { Router } from '@angular/router';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  suppliers: any = {};

  constructor(private router: Router,
              private supplierProvider: SupplierService) { }

  ngOnInit() {
    this.getSuppliers();
  }

  getSuppliers() {
    this.supplierProvider.getListSuppliers().subscribe(data => {
      this.suppliers = data;
      console.log(this.suppliers);
    });
  }

  addNewCsupplier() {
    this.router.navigate(['/add-supplier']);
}

}
