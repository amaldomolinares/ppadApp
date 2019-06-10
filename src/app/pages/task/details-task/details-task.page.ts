import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskapiService } from 'src/app/services/taskapi.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.page.html',
  styleUrls: ['./details-task.page.scss'],
})
export class DetailsTaskPage implements OnInit {

  TaskID: any;
  task;
  Message;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskProvider: TaskapiService,
              public toastController: ToastController, ) { }

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

   SaveNewNote() {
     if (!this.Message) {
        this.presentToast();
     } else {
        this.taskProvider.postNoteIntask(this.Message, this.TaskID).subscribe((notes: any) => {
          console.log(notes);
          if (notes.Status !== 'true') {
            this.ionViewWillEnter();
            this.Message = '';
          }
        });
     }
   }

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Note is empty',
      position: 'middle',
      duration: 2000
    });
    toast.present();
    }


}
