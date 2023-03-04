import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxEmailFieldComponent } from './email-field.component';

describe('MxEmailFieldComponent', () => {
  let component: MxEmailFieldComponent;
  let fixture: ComponentFixture<MxEmailFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxEmailFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxEmailFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
