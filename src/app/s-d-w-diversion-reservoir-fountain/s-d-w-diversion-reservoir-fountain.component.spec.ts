import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWDiversionReservoirFountainComponent } from './s-d-w-diversion-reservoir-fountain.component';

describe('SDWDiversionReservoirFountainComponent', () => {
  let component: SDWDiversionReservoirFountainComponent;
  let fixture: ComponentFixture<SDWDiversionReservoirFountainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWDiversionReservoirFountainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWDiversionReservoirFountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
