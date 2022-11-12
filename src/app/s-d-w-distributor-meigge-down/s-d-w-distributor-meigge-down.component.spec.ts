import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWDistributorMeiggeDownComponent } from './s-d-w-distributor-meigge-down.component';

describe('SDWDistributorMeiggeDownComponent', () => {
  let component: SDWDistributorMeiggeDownComponent;
  let fixture: ComponentFixture<SDWDistributorMeiggeDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWDistributorMeiggeDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWDistributorMeiggeDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
