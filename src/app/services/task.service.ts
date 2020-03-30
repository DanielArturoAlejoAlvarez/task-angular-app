import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) { }


  API_URI = "http://localhost:5200";

  getTasks() {
    return this._http.get<Task[]>(`${this.API_URI}/tasks`);
  }

  getTaskById(id: number) {
    return this._http.get<Task>(`${this.API_URI}/tasks/${id}`);
  }

  saveTask(task: Task) {
    return this._http.post<Task>(`${this.API_URI}/tasks`, task);
  }

  updateTask(task: Task) {
    return this._http.put<Task>(`${this.API_URI}/tasks/${task.id}`, task);
  }

  deleteTask(task: Task) {
    return this._http.delete<Task>(`${this.API_URI}/tasks/${task.id}`);
  }
}
