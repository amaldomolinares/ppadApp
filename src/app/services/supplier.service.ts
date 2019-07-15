import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  NewSupplier = environment.site_url + environment.post_add_new_supplier;
  GetSuppliers = environment.site_url + environment.get_list_suppliers;
  UpdateSupplier = environment.site_url + environment.Update_supplier_by_id;
  GetSupplier = environment.site_url + environment.get_list_supplier_by_id;

  constructor(public http: HttpClient) { }

  getListSuppliers() {
    return this.http.get(this.GetSuppliers);
  }

  getSupplier(IdSupplier) {
    return this.http.get(this.GetSupplier + '/' + IdSupplier);
  }

  postSupplier(NameSupplier, IdCompany, Address, IdCity, County,
               IdState, ZipCode, HomePhone, CellPhone, OfficePhone,
               Type, email, email2, Salesman, CorporateName, Notes,
               Account, IdSupplier) {
    const data = {
      NameSupplier, IdCompany, Address, IdCity, County,
      IdState, ZipCode, HomePhone, CellPhone, OfficePhone,
      Type, email, email2, Salesman, CorporateName, Notes,
      Account, IdSupplier
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.NewSupplier, data, { headers });
  }

  updSupplier(NameSupplier, IdCompany, Address, IdCity, County,
              IdState, ZipCode, HomePhone, CellPhone, OfficePhone,
              Type, email, email2, Salesman, CorporateName, Notes,
              Account, IdSupplier) {
const data = {
NameSupplier, IdCompany, Address, IdCity, County,
IdState, ZipCode, HomePhone, CellPhone, OfficePhone,
Type, email, email2, Salesman, CorporateName, Notes,
Account, IdSupplier
};
const headers = new HttpHeaders();
headers.set('Content-Type', 'application/json');
return this.http.post(this.UpdateSupplier + '/' + IdSupplier, data, { headers });
}

}
