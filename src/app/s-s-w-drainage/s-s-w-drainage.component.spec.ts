import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSWDrainageComponent } from './s-s-w-drainage.component';

describe('SSWDrainageComponent', () => {
  let component: SSWDrainageComponent;
  let fixture: ComponentFixture<SSWDrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSWDrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSWDrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
