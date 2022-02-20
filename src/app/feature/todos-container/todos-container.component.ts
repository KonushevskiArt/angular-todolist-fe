import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/core/services/todos/todos.service';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss']
})
export class TodosContainerComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.initTodos()
  }

}
