import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailedComponent } from './todo-detailed.component';

describe('TodoDetailedComponent', () => {
  let component: TodoDetailedComponent;
  let fixture: ComponentFixture<TodoDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
