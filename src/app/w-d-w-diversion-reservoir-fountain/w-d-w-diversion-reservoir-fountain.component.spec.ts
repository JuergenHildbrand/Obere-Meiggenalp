import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDWDiversionReservoirFountainComponent } from './w-d-w-diversion-reservoir-fountain.component';

describe('WDWDiversionReservoirFountainComponent', () => {
  let component: WDWDiversionReservoirFountainComponent;
  let fixture: ComponentFixture<WDWDiversionReservoirFountainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WDWDiversionReservoirFountainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WDWDiversionReservoirFountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
