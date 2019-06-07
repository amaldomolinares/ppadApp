import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskapiService } from 'src/app/services/taskapi.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  TaskID: any;
  task;
  modalStatus;
  Name;
  Status;
  Summary;

  constructor(private route: ActivatedRoute,
              private taskProvider: TaskapiService,
              public toastController: ToastController,
              private router: Router, ) { }

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
      this.modalStatus = task.TaskInfo.DepartmentID;
      return (this.task);
    });
  }

  UpdateTask() {
    this.taskProvider.updateTask(this.Name, this.Status, this.Summary, this.TaskID).subscribe((data: any) => {
      if (data.status !== 'true') {
        this.presentToast();
        this.router.navigate(['/details-task/' + this.TaskID]);
      }
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Task has update',
      duration: 2000
    });
    toast.present();
    }

}
