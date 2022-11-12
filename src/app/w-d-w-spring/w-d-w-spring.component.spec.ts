import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WDWSpringComponent } from './w-d-w-spring.component';

describe('WDWSpringComponent', () => {
  let component: WDWSpringComponent;
  let fixture: ComponentFixture<WDWSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WDWSpringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WDWSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
