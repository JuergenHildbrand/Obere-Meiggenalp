import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSWDrainageComponent } from './w-s-w-drainage.component';

describe('WSWDrainageComponent', () => {
  let component: WSWDrainageComponent;
  let fixture: ComponentFixture<WSWDrainageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WSWDrainageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WSWDrainageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
