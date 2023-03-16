import { ValidationMessages } from '../../messages/validators.messages';
import { MxField } from '../field.model';

/**
 * Class to set the properties of a Textarea
 *
 * @export
 * @class MxTextareaField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxTextareaField implements Omit<MxField, 'type'> {
  /**
   * The placeholder text to display in the textarea.
   * @type {string}
   */
  placeholder?: string = '';
  /**
   * Whether the field is visible or hidden.
   * @type {boolean}
   */
  visible: boolean = true;
  /**
   * Whether the field is required or optional.
   * @type {boolean}
   */
  required: boolean = false;
  /**
   * Additional information or instructions about the field.
   * @type {string}
   */
  info?: string = '';
  /**
   * Additional validation rules for the field.
   * @type {MxField.validation[]}
   */
  additionalValidations?: MxField.validation[] = [];
  /**
   * The type of field.
   * @readonly
   * @type {MxField.type.TEXTAREA}
   */
  readonly type: MxField.type.TEXTAREA = MxField.type.TEXTAREA;
  /**
   * The size configuration of the textarea field.
   * @type {MxTextareaField.Size}
   */
  size: MxTextareaField.Size;
  /**
   * The maximum character limit and validation message for the textarea field.
   * @type {MxTextareaField.LimitValidation}
   */
  maxCharLimit: MxTextareaField.LimitValidation;
  /**
   * Creates an instance of MxTextareaField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {string} [info] - Additional information about the field.
   * @param {MxTextareaField.Size} [size={ rows: 3, autosize: true }] - The size of the textarea field.
   * @param {MxTextareaField.LimitValidation} [maxCharLimit={ limit: 0, message: ValidationMessages.CHAR_LIMIT }] - The maximum character limit for the field.
   * @param {MxField.validation[]} [additionalValidations] - An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    required: boolean = false,
    placeholder?: string,
    visible: boolean = true,
    info?: string,
    size: MxTextareaField.Size = {
      rows: 3,
      autosize: true
    },
    maxCharLimit: MxTextareaField.LimitValidation = {
      limit: 0,
      message: ValidationMessages.CHAR_LIMIT
    },
    additionalValidations?: MxField.validation[]
  ) {
    this.placeholder = placeholder;
    this.visible = visible;
    this.required = required;
    this.info = info;
    this.additionalValidations = additionalValidations;
    this.size = size;
    this.maxCharLimit = maxCharLimit;
  }
}

export namespace MxTextareaField {
  export interface LimitValidation {
    limit: number;
    message: string;
  }
  export interface Size {
    cols?: number;
    rows?: number;
    autosize?: true;
  }
}
