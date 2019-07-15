import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.page.html',
  styleUrls: ['./edit-supplier.page.scss'],
})
export class EditSupplierPage implements OnInit {

  supplier: any = {};
  IdSupplier;

  NameSupplier;
  IdCompany;
  Address;
  IdCity;
  County;
  IdState;
  ZipCode;
  HomePhone;
  CellPhone;
  OfficePhone;
  Type;
  email;
  email2;
  Salesman;
  CorporateName;
  Notes;
  Account;

  constructor(private supplierProvider: SupplierService,
              private router: Router,
              public toastController: ToastController,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.IdSupplier = this.route.snapshot.paramMap.get('IdSupplier');
    this.getSuppliers();
  }

   getSuppliers() {
    this.supplierProvider.getSupplier(this.IdSupplier).subscribe((data: any) => {
      this.supplier = data;
      return (this.supplier);
    });
  }

  updateSupplier() {
    this.supplierProvider.updSupplier(this.NameSupplier, this.IdCompany, this.Address, this.IdCity, this.County,
                                       this.IdState, this.ZipCode, this.HomePhone, this.CellPhone, this.OfficePhone,
                                       this.Type, this.email, this.email2, this.Salesman, this.CorporateName, this.Notes,
                                       this.Account, this.IdSupplier).subscribe((data: any) => {
                                          if (data.Status !== 'true') {
        this.presentToast();
        this.router.navigate(['/suppliers/']);
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Update Contact',
      duration: 2000
    });
    toast.present();
    }
}

