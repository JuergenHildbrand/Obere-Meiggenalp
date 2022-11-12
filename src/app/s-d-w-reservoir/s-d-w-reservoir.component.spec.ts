import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWReservoirComponent } from './s-d-w-reservoir.component';

describe('SDWReservoirComponent', () => {
  let component: SDWReservoirComponent;
  let fixture: ComponentFixture<SDWReservoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWReservoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWReservoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
