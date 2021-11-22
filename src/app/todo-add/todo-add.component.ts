import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private fb: FormBuilder, private todoService: TodoService, private route: ActivatedRoute,
    private router: Router) { }

  todoForm = this.fb.group({
    title: ['', Validators.required],
    urgency: [1, Validators.required]
  })

  ngOnInit(): void {
  }

  urgencyArray: number[] = [1, 2, 3];

  onSubmit(): void {
    if(this.todoForm.invalid){
      alert(`Form is invalid`);
      return;
    }
    let todo: Todo = { ...this.todoForm.value, urgency: +this.todoForm.value.urgency };
    this.todoService.postTodo(todo).subscribe((_) => {
      this.router.navigate(['list']);
    });
  }

}
