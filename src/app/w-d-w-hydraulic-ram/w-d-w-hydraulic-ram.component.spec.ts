import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDWHydraulicRamComponent } from './w-d-w-hydraulic-ram.component';

describe('WDWHydraulicRamComponent', () => {
  let component: WDWHydraulicRamComponent;
  let fixture: ComponentFixture<WDWHydraulicRamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WDWHydraulicRamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WDWHydraulicRamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
