import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorFormComponent } from './new-author-form.component';

describe('NewAuthorFormComponent', () => {
  let component: NewAuthorFormComponent;
  let fixture: ComponentFixture<NewAuthorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAuthorFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAuthorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
