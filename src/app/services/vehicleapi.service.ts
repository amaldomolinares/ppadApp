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

  getVehicle(vinNumber) {
    return this.http.get(this.vehicleByVin + '/' + vinNumber);
  }

  getVehicleApi(vinNumber) {
    return this.http.get(this.vehicleFromApi + '/' + vinNumber);
  }
}
