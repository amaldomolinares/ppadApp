import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

const token = localStorage.getItem('TOKEN_KEY');
const UserID = localStorage.getItem('UserID');

@Injectable({
  providedIn: 'root'
})
export class TaskapiService {


  NewTask = environment.site_url + environment.post_add_new_task;
  GetTask = environment.site_url + environment.get_task_by_taskid;
  UpdateTask = environment.site_url + environment.Update_task_by_name;
  PostNewNoteInTask = environment.site_url + environment.post_add_note_task;

  constructor(public http: HttpClient, ) {}

  postNewtask( VehicleID, EndDate,InvoiceDate,Name,StartDate,Status,Summary,SupplierID,TotalCost) {
    const data = {
      VehicleID,
      EndDate,
      InvoiceDate,
      Name,
      StartDate,
      Status,
      Summary,
      SupplierID,
      TotalCost,
    };
    console.log(data);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.NewTask, data, { headers });
   }

   getTask(TaskID) {
     return this.http.get(this.GetTask + '/' + TaskID);
   }

   updateTask(EndDate,InvoiceDate,Name,StartDate,Status,Summary,SupplierID,TotalCost,TaskID) {
          const data = {
            EndDate,
            InvoiceDate,
            Name,
            StartDate,
            Status,
            Summary,
            SupplierID,
            TotalCost,
          };
          console.log(data);
          const headers = new HttpHeaders();
          headers.set('Content-Type', 'application/json');
          return this.http.post(this.UpdateTask + '/' + TaskID, data, { headers });
   }

   postNoteIntask(Message, TaskID) {
    const data = {
      Message,
      TaskID,
      UserID,
    };
    const headers = new HttpHeaders();
    headers.set('Token', 'token');
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.PostNewNoteInTask, data, { headers });
   }
}
