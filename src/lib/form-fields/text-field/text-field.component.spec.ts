import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxTextFieldComponent } from './text-field.component';

describe('MxTextFieldComponent', () => {
  let component: MxTextFieldComponent;
  let fixture: ComponentFixture<MxTextFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxTextFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
