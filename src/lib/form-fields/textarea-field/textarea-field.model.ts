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
   * The type of field.
   * @readonly
   * @type {MxField.type.TEXTAREA}
   */
  readonly type: MxField.type.TEXTAREA = MxField.type.TEXTAREA;
  /**
   * Creates an instance of MxTextareaField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] - Additional information about the field.
   * @param {MxTextareaField.Size} [size={ rows: 3, autosize: true }] - The size of the textarea field.
   * @param {MxTextareaField.LimitValidation} [maxCharLimit={ limit: 0, message: ValidationMessages.CHAR_LIMIT }] - The maximum character limit for the field.
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {MxField.validation[]} [additionalValidations] - An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder?: string,
    public info?: string,
    public size: MxTextareaField.Size = {
      rows: 3,
      autosize: true
    },
    public maxCharLimit: MxTextareaField.LimitValidation = {
      limit: 0,
      message: ValidationMessages.CHAR_LIMIT
    },
    public required: boolean = false,
    public visible: boolean = true,
    public additionalValidations?: MxField.validation[]
  ) {}
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
