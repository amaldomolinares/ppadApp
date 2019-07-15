import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastController, IonRouterOutlet } from '@ionic/angular';
import { SupplierService } from 'src/app/services/supplier.service';


@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.page.html',
  styleUrls: ['./add-supplier.page.scss'],
})
export class AddSupplierPage implements OnInit, OnDestroy {

    private routerEvents: any;
    private previousUrl: string;
    private currentUrl: string;
    private canGoBack: boolean;


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
  IdSupplier;

  constructor(private supplierProvider: SupplierService,
              private router: Router,
              public toastController: ToastController,
              private ionRouterOutlet: IonRouterOutlet) { }

              ngOnInit() {
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

  createSupplier() {
    this.supplierProvider.postSupplier(this.NameSupplier, this.IdCompany, this.Address, this.IdCity, this.County,
                                       this.IdState, this.ZipCode, this.HomePhone, this.CellPhone, this.OfficePhone,
                                       this.Type, this.email, this.email2, this.Salesman, this.CorporateName, this.Notes,
                                       this.Account, this.IdSupplier).subscribe((data: any) => {
                                          if (data.Status !== 'true') {
        this.presentToast();
        this.router.navigate(['/vehicles/']);
      }
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Contact Create',
      duration: 2000
    });
    toast.present();
    }

}
