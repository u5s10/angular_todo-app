import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  @Input() todo!: Todo;

  onDelete(): void{
    this.todoService.deleteTodo(this.todo.id).subscribe();
    location.reload();
  }

  onEdit(id: number){
    this.router.navigate(['/edit', this.todo.id])
  }
}
