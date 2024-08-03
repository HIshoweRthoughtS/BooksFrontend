import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReadFormComponent } from './new-read-form.component';

describe('NewReadFormComponent', () => {
  let component: NewReadFormComponent;
  let fixture: ComponentFixture<NewReadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewReadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
