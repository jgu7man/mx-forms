import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxSelectField } from './select-field.model';

/**
 * Component for displaying and editing selection fields.
 * @example
 * // Set the configuration of the field.
 * const selectField: MxField.SELECT = {
 *   id: 'animal',
 *   label: 'Animal',
 *   options: [
 *     { label: 'Dog', value: 'dog' },
 *     { label: 'Cat', value: 'cat' },
 *   ]
 *   required: true,
 *   visible: true,
 * };
 * // Pass the configuration to the component.
 * <mx-select-field [field]="selectField"></mx-select-field>
 *
 * @export
 * @class MxSelectFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class MxSelectFieldComponent extends MxDefaultFieldComponent {
  @Input() set field({ ...field }: MxField.SELECT) {
    const defaultProperties = new MxSelectField('', '');
    this._field.next({ ...defaultProperties, ...field });
  }

  get groups(): MxField.optionGroup[] {
    return 'name' in this.field.options[0]
      ? (this.field.options as MxField.optionGroup[])
      : [];
  }

  get options(): MxField.option[] {
    return !('name' in this.field.options[0])
      ? (this.field.options as MxField.option[])
      : [];
  }
}
