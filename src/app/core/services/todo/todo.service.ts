import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { IResponseTodo } from 'src/app/shared/types';
import { ServerComunicationService } from '../http/server-comunication.service';
import { TodosService } from '../todos/todos.service';

@Injectable()
export class TodoService {
  isVisible = true
  isEdit = false;
  isError = false;
  isLoading = false;
  errorMessage = '';
  form!: FormGroup;
  todo!: IResponseTodo

  constructor(
    private todosService: TodosService,
    private serverComunicationService: ServerComunicationService
  ) { }

  initTodo(todo: IResponseTodo, form: FormGroup) {
    // this.visible = true
    this.todo = todo;
    this.form = form
  }
  
  toggleEdit() {
    this.isEdit = !this.isEdit
  }

  editText(todo: IResponseTodo) {
    if (this.form.valid) {
      this.toggleEdit()
      const id = todo._id
      const shalowCopyTodo = {...todo, 'text': this.form.value.text} 
      const cb = () => todo.text = this.form.value.text;
      const errorMessage = 'Faild to edit the todo'
      this.update(id, shalowCopyTodo, cb, errorMessage)
    }
  }

  addError(message: string, error: any) {
    this.isLoading = false
    this.errorMessage = message;
    this.isError = true;
    setTimeout(() => {
      this.errorMessage = '';
      this.isError = false;
    }, 60000)
    return throwError(() => new Error(error))
  }

  remove(id: string) {
    this.isLoading = true
    this.serverComunicationService.removeTodo(id)
    .pipe(
      catchError(error => {
        return this.addError('Faild to remove todo', error)
      }))
      .subscribe((id) => {
        this.isLoading = false
        this.isVisible = false
      })
    }

  removeTodoFromState(id: string) {
    this.todosService.removeTodo(id)
  }

  toggleDone(id: string, todo: IResponseTodo) {
    const cb = () => todo.isDone = !todo.isDone;
    const shalowCopyTodo = {...todo, 'isDone': !todo.isDone} 
    const errorMessage = 'Faild to make done the todo'
    this.update(id, shalowCopyTodo, cb, errorMessage)
  }

  update(id: string, todo: IResponseTodo, cb: () => void, errorMessage: string) {
    this.isLoading = true
    this.serverComunicationService.editTodo(id, todo)
    .pipe(
      catchError(error => {
        return this.addError(errorMessage, error)
      })
    )
    .subscribe((res) => {
      this.isLoading = false
      cb()
      this.todosService.editTodo(id, todo)
    })
  }
}
