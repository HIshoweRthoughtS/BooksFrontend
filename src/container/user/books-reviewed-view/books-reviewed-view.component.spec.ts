import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReviewedViewComponent } from './books-reviewed-view.component';

describe('BooksReviewedViewComponent', () => {
  let component: BooksReviewedViewComponent;
  let fixture: ComponentFixture<BooksReviewedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksReviewedViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksReviewedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
