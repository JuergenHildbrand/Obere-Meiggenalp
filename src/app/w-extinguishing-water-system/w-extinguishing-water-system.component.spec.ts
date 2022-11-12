import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WExtinguishingWaterSystemComponent } from './w-extinguishing-water-system.component';

describe('WExtinguishingWaterSystemComponent', () => {
  let component: WExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<WExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
