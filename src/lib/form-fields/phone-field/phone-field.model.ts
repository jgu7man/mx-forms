import { ValidationMessages } from '../../messages/validators.messages';
import { MxField } from '../field.model';

/**
 * Class to set phone field properties
 *
 * @export
 * @class MxPhoneField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxPhoneField implements Omit<MxField, 'type'> {
  type: MxField.type.PHONE = MxField.type.PHONE;
  /**
   * Creates an instance of MxPhoneField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] Additional information about the field.
   * @param {MxPhoneField.PatternValidation} [patternValidation={
   *       pattern: MxPhoneField.PATTERN,
   *       message: ValidationMessages.PHONE
   *     }]
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {MxField.validation[]} [additionalValidations] An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder: string,
    public info: string,
    public patternValidation: MxPhoneField.PatternValidation = {
      pattern: MxPhoneField.PATTERN,
      message: ValidationMessages.PHONE
    },
    public visible: boolean = true,
    public required: boolean = false,
    public additionalValidations: MxField.validation[]
  ) {}
}

export namespace MxPhoneField {
  export const PATTERN = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
  export interface PatternValidation {
    pattern: string;
    message: string;
  }
}
