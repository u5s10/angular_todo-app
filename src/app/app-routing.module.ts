import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path: "", component: TodoListComponent},
  {path: "list", component: TodoListComponent},
  {path: "add", component: TodoAddComponent},
  {path: "edit/:id", component: TodoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
