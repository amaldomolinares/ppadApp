import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { ToastController, IonRouterOutlet } from '@ionic/angular';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.page.html',
  styleUrls: ['./suppliers.page.scss'],
})
export class SuppliersPage implements OnInit {

  private routerEvents: any;
  private previousUrl: string;
  private currentUrl: string;
  private canGoBack: boolean;

  suppliers: any = {};
  IdSupplier: any = [];

  constructor(private router: Router,
              private supplierProvider: SupplierService,
              private ionRouterOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.getSuppliers();
    this.canGoBack    = this.ionRouterOutlet.canGoBack();
    this.currentUrl   = this.router.url;
    this.routerEvents = this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl  = event.url;
      }
    });
  }
  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }

  getSuppliers() {
    this.supplierProvider.getListSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }

  addNewSupplier() {
    this.router.navigate(['/add-supplier']);
}

EditSupplier() {
  this.router.navigate(['/edit-supplier/' + this.IdSupplier]);
 }

}
