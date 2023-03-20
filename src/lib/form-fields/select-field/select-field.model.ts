import { MxField } from '../field.model';

/**
 * Class to define select field properties
 *
 * @export
 * @class MxSelectField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxSelectField implements Omit<MxField, 'type'> {
  type: MxField.type.SELECT = MxField.type.SELECT;

  /**
   * Creates an instance of MxSelectField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {MxField.options} [options=[]] Defines the options for the field. It could be grouped or an array of options
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] - Additional information about the field.
   * @param {boolean} [multiple=false] Whether the options could contain multiple selections
   * @param {string} [resetLabel=''] Defines the label to display to reset the field
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {boolean} [disable=false] Whether the field is disable or enable
   * @param {MxField.validation[]} [additionalValidations] - An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public options: MxField.options = [],
    public placeholder: string = '',
    public info: string = '',
    public multiple: boolean = false,
    public resetLabel: string = '',
    public visible: boolean = true,
    public required: boolean = false,
    public disable: boolean = false,
    public additionalValidations: MxField.validation[] = []
  ) {}
}
