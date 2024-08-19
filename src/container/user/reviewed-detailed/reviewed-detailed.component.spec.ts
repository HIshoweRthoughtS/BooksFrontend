import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedDetailedComponent } from './reviewed-detailed.component';

describe('ReviewedDetailedComponent', () => {
  let component: ReviewedDetailedComponent;
  let fixture: ComponentFixture<ReviewedDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewedDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewedDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
