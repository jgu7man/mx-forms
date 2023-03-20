import { MxField } from '../field.model';
import {
  PasswordValidations,
  PasswordValidationsModel
} from './password-validation.model';

/**
 * Class to set the password field properties
 *
 * @export
 * @class MxPasswordField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxPasswordField implements Omit<MxField, 'type'> {
  /**
   * Password type only
   *
   * @type {MxField.type.PASSWORD}
   */
  type: MxField.type.PASSWORD = MxField.type.PASSWORD;
  /**
   * Whether the initial state of the hide toggle button
   *
   * @type {boolean}
   */
  readonly hideToggle?: boolean;
  /**
   * Creates an instance of MxPasswordField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] Additional information about the field.
   * @param {boolean} [hideToggle=true] Whether the initial state of the hide toggle button
   * @param {PasswordValidations} [validations=new PasswordValidationsModel()] Custom configurations for password validators
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [disable=false] Whether the field is disable or enable
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {MxField.validation[]} [additionalValidations] An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder: string = '',
    public info: string = '',
    hideToggle: boolean = true,
    public validations: PasswordValidations = new PasswordValidationsModel(),
    public required: boolean = false,
    public disable: boolean = false,
    public visible: boolean = true,
    public additionalValidations: MxField.validation[] = []
  ) {
    this.validations = validations;
    this.hideToggle = hideToggle;
  }
}
