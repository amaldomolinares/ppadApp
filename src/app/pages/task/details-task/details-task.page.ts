import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskapiService } from 'src/app/services/taskapi.service';

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.page.html',
  styleUrls: ['./details-task.page.scss'],
})
export class DetailsTaskPage implements OnInit {

  TaskID: any;
  task;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskProvider: TaskapiService) { }

  ngOnInit() {
    this.TaskID = this.route.snapshot.paramMap.get('TaskID');
    this.getTaskByTaskID();
  }

  ionViewWillEnter() {
    this.TaskID = this.route.snapshot.paramMap.get('TaskID');
    this.getTaskByTaskID();
   }

  getTaskByTaskID() {
    this.taskProvider.getTask(this.TaskID).subscribe((task: any) => {
      this.task = task;
      console.log(this.task);
      return (this.task);
    });
  }

  EditTask() {
    this.router.navigate(['/edit-task/' + this.TaskID]);
   }


}
