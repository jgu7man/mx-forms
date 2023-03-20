import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxPasswordFieldComponent } from './password-field.component';

describe('MxPasswordFieldComponent', () => {
  let component: MxPasswordFieldComponent;
  let fixture: ComponentFixture<MxPasswordFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxPasswordFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxPasswordFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
