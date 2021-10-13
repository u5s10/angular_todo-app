import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo } from './models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todosUrl = 'http://localhost:3000/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  getTodo(id: number): Observable<Todo>{
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url);
  }

  postTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo);
  }

  deleteTodo(id: number): Observable<unknown>{
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url);
  }

  updateTodo(todo: Todo): Observable<Todo>{
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo);
  }
}
