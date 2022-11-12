import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWHydraulicRamComponent } from './s-d-w-hydraulic-ram.component';

describe('SDWHydraulicRamComponent', () => {
  let component: SDWHydraulicRamComponent;
  let fixture: ComponentFixture<SDWHydraulicRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWHydraulicRamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWHydraulicRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
