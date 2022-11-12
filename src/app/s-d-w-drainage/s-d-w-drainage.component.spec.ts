import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWDrainageComponent } from './s-d-w-drainage.component';

describe('SDWDrainageComponent', () => {
  let component: SDWDrainageComponent;
  let fixture: ComponentFixture<SDWDrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWDrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWDrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
