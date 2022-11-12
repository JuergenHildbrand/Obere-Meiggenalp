import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WAgainExtinguishingWaterSystemComponent } from './w-again-extinguishing-water-system.component';

describe('WAgainExtinguishingWaterSystemComponent', () => {
  let component: WAgainExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<WAgainExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WAgainExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WAgainExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
