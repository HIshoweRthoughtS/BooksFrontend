import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTodoViewComponent } from './books-todo-view.component';

describe('BooksTodoViewComponent', () => {
  let component: BooksTodoViewComponent;
  let fixture: ComponentFixture<BooksTodoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksTodoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksTodoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
