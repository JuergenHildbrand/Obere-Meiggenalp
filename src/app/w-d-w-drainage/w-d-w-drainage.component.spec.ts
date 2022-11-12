import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDWDrainageComponent } from './w-d-w-drainage.component';

describe('WDWDrainageComponent', () => {
  let component: WDWDrainageComponent;
  let fixture: ComponentFixture<WDWDrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WDWDrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WDWDrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
