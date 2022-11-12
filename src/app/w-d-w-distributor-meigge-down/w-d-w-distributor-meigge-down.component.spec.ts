import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDWDistributorMeiggeDownComponent } from './w-d-w-distributor-meigge-down.component';

describe('WDWDistributorMeiggeDownComponent', () => {
  let component: WDWDistributorMeiggeDownComponent;
  let fixture: ComponentFixture<WDWDistributorMeiggeDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WDWDistributorMeiggeDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WDWDistributorMeiggeDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
