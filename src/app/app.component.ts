import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-angular-app';


  constructor(private _router: Router){}

  List() {
    this._router.navigate(['task/list']);
  }

  Add() {
    this._router.navigate(['task/add'])
  }
}
