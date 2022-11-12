import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SExtinguishingWaterSystemComponent } from './s-extinguishing-water-system.component';

describe('SExtinguishingWaterSystemComponent', () => {
  let component: SExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<SExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
