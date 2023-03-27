import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxDateFieldComponent } from './date-field.component';

describe('DateFieldComponent', () => {
  let component: MxDateFieldComponent;
  let fixture: ComponentFixture<MxDateFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxDateFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxDateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
