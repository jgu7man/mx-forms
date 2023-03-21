import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxRadioFieldComponent } from './radio-field.component';

describe('MxRadioFieldComponent', () => {
  let component: MxRadioFieldComponent;
  let fixture: ComponentFixture<MxRadioFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxRadioFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxRadioFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
