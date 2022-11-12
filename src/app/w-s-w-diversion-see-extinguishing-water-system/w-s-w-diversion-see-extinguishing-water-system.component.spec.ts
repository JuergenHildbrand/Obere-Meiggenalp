import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSWDiversionSeeExtinguishingWaterSystemComponent } from './w-s-w-diversion-see-extinguishing-water-system.component';

describe('WSWDiversionSeeExtinguishingWaterSystemComponent', () => {
  let component: WSWDiversionSeeExtinguishingWaterSystemComponent;
  let fixture: ComponentFixture<WSWDiversionSeeExtinguishingWaterSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WSWDiversionSeeExtinguishingWaterSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WSWDiversionSeeExtinguishingWaterSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
