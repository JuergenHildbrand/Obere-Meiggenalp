import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDWSpringComponent } from './s-d-w-spring.component';

describe('SDWSpringComponent', () => {
  let component: SDWSpringComponent;
  let fixture: ComponentFixture<SDWSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDWSpringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SDWSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
