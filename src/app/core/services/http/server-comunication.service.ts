import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseTodo, ITodo } from 'src/app/shared/types';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class ServerComunicationService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<IResponseTodo[]>(this.url)
  }
  addTodo(todo: ITodo) {
    return this.http.post<IResponseTodo>(this.url, todo)
  }
  removeTodo(id: string) {
    return this.http.delete<string>(this.url + `${id}`)
  }
  editTodo(id: string, todo: ITodo) {
    return this.http.put<IResponseTodo>(this.url + `${id}`, todo)
  }
}
