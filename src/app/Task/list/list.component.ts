import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/Task';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(private _toastr: ToastrService, private _ts: TaskService, private _router:Router) { }

  ngOnInit() {
    this.listTask();
  }

  listTask() {
    this._ts.getTasks()
      .subscribe(data=>{
        console.log(data);
        this.tasks = data
      },
      err=>{
        console.error(err);
      })
  }

  deleteTask(task: Task) {
    this._ts.deleteTask(task)
      .subscribe(data=>{
        this.tasks = this.tasks.filter(t=>t!==task);
        this._toastr.success('Task deleted successfully!', 'SUCCESS!!');
      });
  }

}
