import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';

/**
 * Component for displaying and editing numeric fields.
 * @example
 * <mx-number-field [field]="myNumberField"></mx-number-field>
 * @export
 * @class MxNumberFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-number-field',
  exportAs: 'mxNumberField',
  templateUrl: '../default-field/default-field.component.html'
})
export class MxNumberFieldComponent extends MxDefaultFieldComponent {
  /**
   * Receives the number field configuration
   * @param {Partial<MxField.NUMBER>} field - The configuration of the `field` input property.
   * @param {string} [field.id] - The ID of the field.
   * @param {string} [field.label] - The label of the field.
   * @param {boolean} [field.required] - Whether the field is required or not.
   * @param {boolean} [field.visible] - Whether the field is visible or not.
   * @param {MxField.Type} [field.type=MxField.type.NUMBER] - The type of the field.
   * @param {MxField.Validation[]} [field.additionalValidations] - An array of additional validations for the field.
   * @example
   * // Set the configuration of the field.
   * const numberField: Partial<MxField.NUMBER> = {
   *   id: 'age',
   *   label: 'Age',
   *   required: true,
   *   visible: true,
   *   additionalValidations: [
   *     { type: MxField.ValidationType.MIN_VALUE, value: 0 },
   *     { type: MxField.ValidationType.MAX_VALUE, value: 150 }
   *   ]
   * };
   * // Pass the configuration to the component.
   * <mx-number-field [field]="numberField"></mx-number-field>
   */
  @Input() set field({ type = MxField.type.NUMBER, ...field }: MxField) {
    this._field.next({ ...field, type });
  }
  get field(): MxField {
    return this._field.getValue();
  }
}