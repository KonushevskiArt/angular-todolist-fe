import { animate, AnimationEvent, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/core/services/todo/todo.service';
import { IResponseTodo } from 'src/app/shared/types';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService],
  animations: [
    trigger('anima', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate('800ms ease-out')
      ]),
      transition(':leave', [
        animate('800ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(0px)',
          }),
          style({
            opacity: 0,
            transform: 'translateX(100px)',
          }),
        ]))
      ])
    ])
  ]
})
export class TodoComponent implements OnInit {
  @Input() todo!: IResponseTodo
  @ViewChild('inputIsDone', {static: true}) inputIsDoneRef!: ElementRef;
  form!: FormGroup
  animaState = 'start';
  isVisible = false;
   
  constructor(public todoService: TodoService) { }

  ngOnInit(): void {  
    this.isVisible = true
    this.form = new FormGroup({
      text: new FormControl(this.todo.text, [
        Validators.required, 
        Validators.maxLength(90)
      ])
    })
    this.todoService.initTodo(this.todo, this.form)
  }

  animaDone(event: AnimationEvent, id: string) {
    if (event.fromState === 'start') {
      this.todoService.removeTodoFromState(id)
    }
  }

}
