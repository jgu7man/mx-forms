import { Component, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';

/**
 * Component for displaying and editing numeric fields.
 * @example
 * // Set the configuration of the field.
 * const emailField: MxField.EMAIL = {
 *   id: 'email',
 *   label: 'Email',
 *   required: true,
 *   visible: true,
 * };
 * // Pass the configuration to the component.
 * <mx-email-field [field]="emailField"></mx-email-field>
 * @export
 * @class MxPhoneFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-phone-field',
  exportAs: 'mxPhoneField',
  templateUrl: './phone-field.component.html'
})
export class MxPhoneFieldComponent extends MxDefaultFieldComponent {
  /**
   * Receives the email field configuration
   * @param {Partial<MxField.EMAIL>} field - The configuration of the `field` input property.
   * @param {string} [field.id] - The ID of the field.
   * @param {string} [field.label] - The label of the field.
   * @param {boolean} [field.required] - Whether the field is required or not.
   * @param {boolean} [field.visible] - Whether the field is visible or not.
   * @param {MxField.Type} [field.type=MxField.type.EMAIL] - The type of the field.
   * @param {MxField.Validation[]} [field.additionalValidations] - An array of additional validations for the field.
   */
  @Input() set field({
    additionalValidations = [],
    patternValidation,
    ...field
  }: MxField.PHONE) {
    additionalValidations = [
      ...additionalValidations,
      {
        validator: Validators.pattern(patternValidation.pattern),
        token: 'pattern',
        message: patternValidation.message
      }
    ];
    this._field.next({ ...field, additionalValidations });
  }
}
