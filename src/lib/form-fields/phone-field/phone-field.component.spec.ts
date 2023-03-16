import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxPhoneFieldComponent } from './phone-field.component';

describe('MxEmailFieldComponent', () => {
  let component: MxPhoneFieldComponent;
  let fixture: ComponentFixture<MxPhoneFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxPhoneFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxPhoneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
