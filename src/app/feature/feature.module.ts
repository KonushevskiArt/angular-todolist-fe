import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CreatetTodoComponent } from "./createt-todo/createt-todo.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { TodoComponent } from "./todo/todo.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TodosContainerComponent } from './todos-container/todos-container.component';

@NgModule({
  declarations: [
    CreatetTodoComponent,
    MainLayoutComponent,
    TodoComponent,
    TodosContainerComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    CreatetTodoComponent,
    MainLayoutComponent,
    TodoComponent,
    TodosContainerComponent
  ]
})

export class FeatureModule {

}