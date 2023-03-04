import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxNumberFieldComponent } from './number-field.component';

describe('MxNumberFieldComponent', () => {
  let component: MxNumberFieldComponent;
  let fixture: ComponentFixture<MxNumberFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxNumberFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxNumberFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
