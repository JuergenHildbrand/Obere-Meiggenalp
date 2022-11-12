import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSWDiversionSeeExtinguishingWaterSystemComponent } from './s-s-w-diversion-see-extinguishing-water-system.component';

describe('SSWDiversionSeeExtinguishingWaterSystemComponent', () => {
  let component: SSWDiversionSeeExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<SSWDiversionSeeExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSWDiversionSeeExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSWDiversionSeeExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
