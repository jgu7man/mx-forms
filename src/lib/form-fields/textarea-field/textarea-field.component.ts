import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxTextareaField } from './textarea-field.model';

/**
 * Component for displaying a textarea input field with additional validations.
 * @example
 * <mx-textarea-field
 * [field]="{
 *  id: 'description',
 *  label: 'Description',
 *  maxCharLimit: {
 *    limit:  500,
 *    message: 'Description cannot exceed 500 characters.'
 *  }
 * }"></mx-textarea-field>
 * @export
 * @class MxTextareaFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class MxTextareaFieldComponent extends MxDefaultFieldComponent {
  /**
   * Sets the field configuration for the textarea input.
   * @example
   * {
   *  id: 'description',
   *  label: 'Description',
   *  maxCharLimit: {
   *    limit:  500,
   *    message: 'Description cannot exceed 500 characters.'
   *  }
   * }
   * @param {MxField.TEXTAREA} field - The field configuration for the textarea input.
   *
   */
  @Input() set field({
    additionalValidations = [],
    maxCharLimit: limitValidation,
    ...field
  }: MxField.TEXTAREA) {
    additionalValidations = [
      ...additionalValidations,
      {
        validator: Validators.maxLength(limitValidation.limit),
        token: 'maxLength',
        message: limitValidation.message
      }
    ];
    const defaultProperties = new MxTextareaField('', '');
    this._field.next({ ...defaultProperties, ...field, additionalValidations });
  }
}
