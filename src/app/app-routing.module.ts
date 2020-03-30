import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Task/list/list.component';
import { AddComponent } from './Task/add/add.component';


const routes: Routes = [
  {path: 'task/list', component: ListComponent},
  {path: 'task/add', component: AddComponent},
  {path: 'task/edit/:id', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
