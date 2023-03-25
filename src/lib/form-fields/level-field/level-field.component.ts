import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxLevelField } from './level-field.model';

/**
 * Represents a custom level field component that extends MxDefaultFieldComponent.
 * @export
 * @class MxLevelFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-level-field',
  templateUrl: './level-field.component.html',
  styleUrls: ['./level-field.component.scss']
})
export class MxLevelFieldComponent extends MxDefaultFieldComponent {
  /**
   * Sets the configuration of the level field.
   * @memberof MxLevelFieldComponent
   * @param {MxField.LEVEL} field - The field configuration to be set.
   * @example
   * <mx-level-field
   * [field]="{
   *  id: 'level',
   *  label: 'Level',
   *  placeholder: 'Select level',
   *  info: 'Choose a level between 1 and 100',
   *  required: true,
   *  visible: true,
   *  disable: false,
   *  minLevel: {
   *   label: 'Beginner',
   *   amount: 1,
   *  },
   *  maxLevel: {
   *   label: 'Expert',
   *   amount: 100
   *  }
   *  },
   *  intervals: 0,
   *  thumb: true,
   *  vertical: false,
   *  additionalValidations: [
   *   { name: 'min', message: 'Level must be greater than or equal to 1', validator: Validators.min(1) },
   *   { name: 'max', message: 'Level must be less than or equal to 100', validator: Validators.max(100) }
   *  ]
   * }"
   * </mx-level-field>
   */
  @Input() set field({ ...field }: MxField.LEVEL) {
    const defaultProperties = new MxLevelField('', '');
    this._field.next({ ...field, ...defaultProperties });
  }
}
