import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskapiService {

  NewTask = environment.site_url + environment.post_add_new_task;
  GetTask = environment.site_url + environment.get_task_by_taskid;
  UpdateTask = environment.site_url + environment.Update_task_by_name;

  constructor(public http: HttpClient, ) {}

  postNewtask( OrderID, Name, Status, StartDate, Summary) {
    const data = {
      OrderID,
      Name,
      Status,
      StartDate,
      Summary,
    };
    console.log(data);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(this.NewTask, data, { headers });
   }

   getTask(TaskID) {
     return this.http.get(this.GetTask + '/' + TaskID);
   }
   updateTask(Name, Status, Summary, TaskID) {
          const data = {
            Name,
            Status,
            Summary,
          };
          console.log(data);
          const headers = new HttpHeaders();
          headers.set('Content-Type', 'application/json');
          return this.http.post(this.UpdateTask + '/' + TaskID, data, { headers });
        }
}
