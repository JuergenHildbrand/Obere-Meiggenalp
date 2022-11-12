import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDWReservoirComponent } from './w-d-w-reservoir.component';

describe('WDWReservoirComponent', () => {
  let component: WDWReservoirComponent;
  let fixture: ComponentFixture<WDWReservoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WDWReservoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WDWReservoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
