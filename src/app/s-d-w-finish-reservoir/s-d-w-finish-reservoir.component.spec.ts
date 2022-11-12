import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWFinishReservoirComponent } from './s-d-w-finish-reservoir.component';

describe('SDWFinishReservoirComponent', () => {
  let component: SDWFinishReservoirComponent;
  let fixture: ComponentFixture<SDWFinishReservoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWFinishReservoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWFinishReservoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
