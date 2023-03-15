import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { PasswordValidationsModel } from './password-validation.model';

/**
 * Component for displaying and editing numeric fields.
 * @example
 * // Set the configuration of the field.
 * const passwordField: MxField.PASSWORD = {
 *   id: 'password',
 *   label: 'Password',
 *   required: true,
 *   visible: true,
 *   validations: new InitPasswordValidations({
 *    minimumLength: 8,
       maximumLength: 20,
       characterCase: false,
       requiresNumber: false,
       requiresSpecialChar: false
 *    })
 * };
 * // Pass the configuration to the component.
 * <mx-password-field [field]="passwordField"></mx-password-field>
 * @export
 * @class MxEmailFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-password-field',
  exportAs: 'mxPasswordField',
  templateUrl: './password-field.component.html'
})
export class MxPasswordFieldComponent extends MxDefaultFieldComponent {
  private validationsConfig = new PasswordValidationsModel();
  hide: boolean = false;

  /**
   * Receives the password field configuration
   * @param {Partial<MxField.PASSWORD>} field - The configuration of the `field` input property.
   * @param {string} [field.id] - The ID of the field.
   * @param {string} [field.label] - The label of the field.
   * @param {boolean} [field.required] - Whether the field is required or not.
   * @param {boolean} [field.visible] - Whether the field is visible or not.
   * @param {MxField.Type} [field.type=MxField.type.PASSWORD] - The type of the field.
   * @param {MxField.Validation[]} [field.additionalValidations] - An array of additional validations for the field.
   */
  @Input() set field({
    additionalValidations = [],
    validations = this.validationsConfig,
    hideToggle = true,
    ...field
  }: MxField.PASSWORD) {
    additionalValidations = [
      ...additionalValidations,
      validations.minimumLength,
      validations.maximumLength,
      validations.characterCase,
      validations.requiresNumber,
      validations.requiresSpecialChar
    ];
    this.hide = hideToggle;
    this._field.next({ ...field, additionalValidations });
  }
}
