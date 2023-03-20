import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxSelectFieldComponent } from './select-field.component';

describe('SelectFieldComponent', () => {
  let component: MxSelectFieldComponent;
  let fixture: ComponentFixture<MxSelectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxSelectFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
