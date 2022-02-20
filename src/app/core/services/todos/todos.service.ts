import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IResponseTodo } from 'src/app/shared/types';
import { ServerComunicationService } from '../http/server-comunication.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  isLoading = false;
  isError = false;
  todos!: IResponseTodo[];

  constructor(private serverComunicationService: ServerComunicationService) { }

  getAllTodos() {
    return this.serverComunicationService.getTodos()
  }

  addTodo(newTodo: IResponseTodo) {
    this.todos = [newTodo, ...this.todos]
  }
  
  removeTodo(id: string) {
    const index = this.todos.findIndex(el => el._id === id)
    this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)]
  }

  editTodo(id: string, todo: IResponseTodo ) {
    //??
  }

  initTodos() {
    this.isLoading = true;
    this.getAllTodos()
    .pipe(
      catchError(error => {
        this.isError = true
        return throwError(() => new Error(error))
      })
    )
    .subscribe((res) => {
      this.isLoading = false
      this.todos = res;
    })
  }

}
