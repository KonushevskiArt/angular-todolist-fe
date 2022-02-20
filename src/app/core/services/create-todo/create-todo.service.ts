import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { IResponseTodo, ITodo } from 'src/app/shared/types';
import { ServerComunicationService } from '../http/server-comunication.service';
import { TodosService } from '../todos/todos.service';

@Injectable()
export class CreateTodoService {
  isSuccess = false
  isError = false;
  isLoading = false;
  errorMessage = '';
  form!: FormGroup;

  constructor(
    private todosService: TodosService,
    private serverComunicationService: ServerComunicationService
  ) { }

  initCreateTodo() {
    this.form = new FormGroup({
      text: new FormControl('', [
        Validators.required, 
        Validators.maxLength(90)
      ])
    })
  }

  removeError() {
    this.errorMessage = '';
    this.isError = false;
  }

  createTodo() {
    if (this.form.valid) {
      const str = this.form.value.text;

      const newTodo: ITodo = {
        text: str,
        isDone: false
      }

      this.isLoading = true
      this.serverComunicationService.addTodo(newTodo)
        .pipe(
          catchError(error => {
            this.isLoading = false
            this.errorMessage = 'Faild to add todo';
            this.isError = true;
            return throwError(() => new Error(error))
          })
        )
        .subscribe((res: IResponseTodo) => {
          this.isLoading = false
          this.isSuccess = true
          this.form.reset()
          this.todosService.addTodo(res)
          setTimeout(() => {
            this.isSuccess = false;
          }, 5000)
        })
    } else {
      this.errorMessage = 'field must be filled'
      this.isError = true
    }
  }

}
