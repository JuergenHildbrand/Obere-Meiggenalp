import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDescriptionWinterComponent } from './dialog-description-winter.component';

describe('DialogDescriptionWinterComponent', () => {
  let component: DialogDescriptionWinterComponent;
  let fixture: ComponentFixture<DialogDescriptionWinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDescriptionWinterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDescriptionWinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
