import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WBallValveExtinguishingWaterSystemComponent } from './w-ball-valve-extinguishing-water-system.component';

describe('WBallValveExtinguishingWaterSystemComponent', () => {
  let component: WBallValveExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<WBallValveExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WBallValveExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WBallValveExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
