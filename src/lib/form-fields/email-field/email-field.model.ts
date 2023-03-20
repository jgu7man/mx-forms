import { ValidationMessages } from '../../messages/validators.messages';
import { MxField } from '../field.model';

/**
 * Class to set configurations of an email field
 *
 * @export
 * @class MxEmailField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxEmailField implements Omit<MxField, 'type'> {
  type: MxField.type.EMAIL = MxField.type.EMAIL;
  emailValidationMsg?: string = ValidationMessages.EMAIL;
  /**
   * Creates an instance of MxEmailField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] Additional information about the field.
   * @param {string} [emailValidationMsg] A custom message for email format validation.
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {MxField.validation[]} [additionalValidations] An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder?: string,
    public info?: string,
    emailValidationMsg?: string,
    public required: boolean = false,
    public visible: boolean = true,
    public additionalValidations?: MxField.validation[]
  ) {
    this.emailValidationMsg = emailValidationMsg;
  }
}
