import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBallValveExtinguishingWaterSystemComponent } from './s-ball-valve-extinguishing-water-system.component';

describe('SBallValveExtinguishingWaterSystemComponent', () => {
  let component: SBallValveExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<SBallValveExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBallValveExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBallValveExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
