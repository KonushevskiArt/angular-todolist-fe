import { Component, OnInit} from '@angular/core';
import { CreateTodoService } from 'src/app/core/services/create-todo/create-todo.service';

@Component({
  selector: 'app-createt-todo',
  templateUrl: './createt-todo.component.html',
  styleUrls: ['./createt-todo.component.scss'],
  providers: [CreateTodoService]
})
export class CreatetTodoComponent implements OnInit {

  constructor(public createTodoService: CreateTodoService) { }

  ngOnInit(): void {
    this.createTodoService.initCreateTodo()
  }

  createTodo() {
    this.createTodoService.createTodo()
  }

}
