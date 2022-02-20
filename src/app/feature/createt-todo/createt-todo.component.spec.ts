import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetTodoComponent } from './createt-todo.component';

describe('CreatetTodoComponent', () => {
  let component: CreatetTodoComponent;
  let fixture: ComponentFixture<CreatetTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
