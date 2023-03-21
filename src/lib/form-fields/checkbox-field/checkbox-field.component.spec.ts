import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxCheckboxFieldComponent } from './checkbox-field.component';

describe('MxCheckboxFieldComponent', () => {
  let component: MxCheckboxFieldComponent;
  let fixture: ComponentFixture<MxCheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxCheckboxFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
