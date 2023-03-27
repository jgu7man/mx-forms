import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxCheckboxField } from './checkbox-field.model';

/**
 * The `MxCheckboxFieldComponent` is a custom form field component for displaying and interacting with a single checkbox.
 *
 * It extends the `MxDefaultFieldComponent` class and uses the `MxCheckboxField` model to define the properties of the field.
 *
 * To use this component, you can simply add the `mx-checkbox-field` selector to your template and pass a `MxField.CHECKBOX` object to the `field` input property.
 *
 * @example
 * <mx-checkbox-field [field]="{ id: 'myCheckbox', label: 'My Checkbox' }"></mx-checkbox-field>
 *
 * @export
 * @class MxCheckboxFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class MxCheckboxFieldComponent extends MxDefaultFieldComponent {
  /**
   * Sets the properties of the field using a `MxField.CHECKBOX` object.
   *
   * @param {MxField.CHECKBOX} field - The properties of the checkbox field.
   *
   * @example
   * this.checkboxField = {
   *   id: 'myCheckbox',
   *   label: 'My Checkbox',
   *   defaultSelected: true,
   *   required: true,
   *   additionalValidations: [{ type: 'required', errorMessage: 'You must select this checkbox' }]
   * };
   */
  @Input() set field({ ...field }: MxField.CHECKBOX) {
    const defaultProperties = new MxCheckboxField('', '');
    this._field.next({ ...defaultProperties, ...field });
  }
}
