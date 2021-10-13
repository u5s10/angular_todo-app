import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private todoService: TodoService) { }

  id!: string;

  todoForm = this.fb.group({
    id: 0,
    title: ['', Validators.required],
    urgency: [1, Validators.required]
  })

  urgencyArray: number[] = [1, 2, 3];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '0';
    this.todoService.getTodo(Number(this.id)).subscribe((data) => {
      this.todoForm.patchValue({ title: data.title, urgency: data.urgency, id: data.id })
    });
  }

  onSubmit(): void {
    this.todoService.updateTodo({ ...this.todoForm.value }).subscribe((_)=>{
      this.router.navigate(['list']);
    });
  }

}
