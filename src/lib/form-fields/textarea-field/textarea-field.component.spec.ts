import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MxField } from '../field.model';
import { MxTextareaFieldComponent } from './textarea-field.component';

describe('TextareaFieldComponent', () => {
  let component: MxTextareaFieldComponent;
  let fixture: ComponentFixture<MxTextareaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxTextareaFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxTextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add max length validation', () => {
    const mockField: Partial<MxField.TEXTAREA> = {
      additionalValidations: [],
      maxCharLimit: { limit: 10, message: 'Max limit exceeded' }
    };
    component.field = mockField as MxField.TEXTAREA;
    expect((component.field.additionalValidations || []).length).toEqual(1);
    expect(
      (component.field.additionalValidations || [])[0].validator.name
    ).toEqual('maxLength');
    expect((component.field.additionalValidations || [])[0].token).toEqual(
      'email'
    );
    expect((component.field.additionalValidations || [])[0].message).toEqual(
      'Max limit exceeded'
    );
  });
});
