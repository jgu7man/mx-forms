import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxRadioField } from './radio-field.model';

/**
 * Component for displaying and editing radio fields.
 *
 * @example
 * // Set the configuration of the field.
 * const radioField: Partial<MxField.RADIO> = {
 *   id: 'gender',
 *   label: 'Gender',
 *   options: [
 *     { value: 'M', label: 'Male' },
 *     { value: 'F', label: 'Female' },
 *     { value: 'O', label: 'Other' }
 *   ],
 *   required: true,
 *   visible: true
 * };
 * // Pass the configuration to the component.
 * <mx-radio-field [field]="radioField"></mx-radio-field>
 *
 * @export
 * @class MxRadioFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss']
})
export class MxRadioFieldComponent extends MxDefaultFieldComponent {
  /**
   * Sets the configuration of the radio field.
   *
   * @param {MxField.RADIO} field The configuration of the field.
   */
  @Input() set field({ ...field }: MxField.RADIO) {
    const defaultProperties = new MxRadioField('', '');
    this._field.next({ ...defaultProperties, ...field });
  }
}
