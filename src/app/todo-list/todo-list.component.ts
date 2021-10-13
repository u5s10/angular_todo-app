import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data: Todo[]) => {
        this.todos = data;
    });
  }

}
