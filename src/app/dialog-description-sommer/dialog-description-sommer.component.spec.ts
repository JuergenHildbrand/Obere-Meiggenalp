import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDescriptionSommerComponent } from './dialog-description-sommer.component';

describe('DialogDescriptionSommerComponent', () => {
  let component: DialogDescriptionSommerComponent;
  let fixture: ComponentFixture<DialogDescriptionSommerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDescriptionSommerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDescriptionSommerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
