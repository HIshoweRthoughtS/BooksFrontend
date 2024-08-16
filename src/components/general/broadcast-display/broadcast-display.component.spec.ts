import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastDisplayComponent } from './broadcast-display.component';

describe('BroadcastDisplayComponent', () => {
  let component: BroadcastDisplayComponent;
  let fixture: ComponentFixture<BroadcastDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BroadcastDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
