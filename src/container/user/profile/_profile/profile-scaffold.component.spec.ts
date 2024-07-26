import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScaffoldComponent } from './profile-scaffold.component';

describe('ProfileScaffoldComponent', () => {
  let component: ProfileScaffoldComponent;
  let fixture: ComponentFixture<ProfileScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileScaffoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
