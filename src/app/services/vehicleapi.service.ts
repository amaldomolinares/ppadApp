import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleapiService {

  vinSearch = environment.site_car;
  listVehicles = environment.site_url + environment.get_list_vehicles;
  vehicleByVin = environment.site_url + environment.get_vehicle_by_vinNumber;
  vehicleFromApi = environment.site_url + environment.get_Vehicle_From_Api;
  vehicleUpdate = environment.site_url + environment.Update_vehicle_by_id;
  createVehicle = environment.site_url + environment.Create_Vehicle;

  constructor(private router: Router,
              public http: HttpClient) { }

  vehicleSearch(vinNumber) {
    const vin = vinNumber;
    const headers = new HttpHeaders();
    headers.set('X-RapidAPI-Host', 'vindecoder.p.rapidapi.com');
    headers.set('X-RapidAPI-Key', '1c89f52f3cmsh2ef1586ae8fe247p1e8c79jsna59046d8649d');
    return this.http.post(this.vinSearch, vin, { headers });

  }

  getVehiclesList() {
    return this.http.get(this.listVehicles);
  }

  getVehicle(VehicleID) {
    return this.http.get(this.vehicleByVin + '/' + VehicleID);
  }

  getVehicleApi(VehicleID) {
    return this.http.get(this.vehicleFromApi + '/' + VehicleID);
  }

  postVehicle(make, model, modelYear, color, fuelType, transmission, engine,
              trim, OriginalCost, SellingPrice, PurchaseDate,
              Status, PurchaseMiles, CurrentMiles, StockNumber, vinNumber) {
    const data = {
    make, model, modelYear, color, fuelType, transmission, engine,
    trim, OriginalCost, SellingPrice, PurchaseDate,
    Status, PurchaseMiles, CurrentMiles, StockNumber, vinNumber
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.createVehicle, data, { headers });
    }

  updateVehicle(make, model, modelYear, color, fuelType, transmission, engine,
                trim, VehicleID, OriginalCost, SellingPrice, PurchaseDate,
                Status, PurchaseMiles, CurrentMiles, StockNumber) {
    const data = {
      make, model, modelYear, color, fuelType, transmission, engine,
      trim, VehicleID, OriginalCost, SellingPrice, PurchaseDate,
      Status, PurchaseMiles, CurrentMiles, StockNumber
    };
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.vehicleUpdate + '/' + VehicleID, data, { headers });
  }
}
