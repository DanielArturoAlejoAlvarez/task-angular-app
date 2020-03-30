import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  task: Task = new Task();

  edit: boolean = false;

  btnAction: string = "CREATE";
  
  constructor(private _toastr: ToastrService, private _ts: TaskService, private _router: Router, private _activated : ActivatedRoute) { }

  ngOnInit() {
    let params = this._activated.snapshot.params;
    if(params.id) {
      this._ts.getTaskById(params.id)
      .subscribe(data=>{
        this.task = data;
        this.edit = true;
        this.btnAction = "UPDATE";
      },
      err=>{
        console.error(err);
      });
    }    
  }

  addTask() {
    this._ts.saveTask(this.task)
      .subscribe(data=>{
        this._toastr.success('Task saved successfully!', 'SUCCESS!!');
        this._router.navigate(['task/list']);
      },
      err=>{
        console.error(err);
      });
  }

  updTask(task: Task) {
    this._ts.updateTask(task)
      .subscribe(data=>{
        this.task = data;
        this._toastr.success('Task updated successfully!', 'SUCCESS!!');
        this._router.navigate(['task/list']);
      },
      err=>{
        console.error(err);
      });
  }

}
