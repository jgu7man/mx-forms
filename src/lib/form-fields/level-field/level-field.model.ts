import { MxField } from '../field.model';

/**
 * Class to set the configuration of the level field
 *
 * @export
 * @class MxLevelField
 * @implements {Omit<MxField, 'type'>}
 */
export class MxLevelField implements Omit<MxField, 'type'> {
  /**
  The type of the field.
  @type {MxField.type.LEVEL}
  */
  type: MxField.type.LEVEL = MxField.type.LEVEL;
  /**
   * Creates an instance of MxTextField.
   * @param {string} id The unique identifier for the field.
   * @param {string} label The label text for the field.
   * @param {string} [placeholder] The placeholder text to display in the textarea.
   * @param {string} [info] - Additional information about the field.
   * @param {MxLevelField.minLevel} [minLevel] The minimum level value of the level field.
   * @param {MxLevelField.maxLevel} [maxLevel] The maximum level value of the level field.
   * @param {number} [intervals=0] The number of intervals in the level field.
   * @param {boolean} [thumb=true] Whether to display a thumb in the level field.
   * @param {boolean} [vertical=false] Whether to display the level field vertically.
   * @param {boolean} [required=false] Whether the field is required or optional.
   * @param {boolean} [visible=true] Whether the field is visible or hidden.
   * @param {boolean} [disable=false] Whether the field is disable or enable
   * @param {MxField.validation[]} [additionalValidations] - An array of additional validation rules for the field.
   */
  constructor(
    public id: string,
    public label: string,
    public placeholder: string = '',
    public info: string = '',
    public minLevel: MxLevelField.minLevel = {
      label: 'Min',
      amount: 1
    },
    public maxLevel: MxLevelField.maxLevel = {
      label: 'Max',
      amount: 100
    },
    public intervals: number = 0,
    public thumb: boolean = true,
    public vertical: boolean = false,
    public visible: boolean = true,
    public required: boolean = false,
    public disable: boolean = false,
    public additionalValidations: MxField.validation[] = []
  ) {}
}

export namespace MxLevelField {
  /**
   * An interface representing the minimum level value of the level field.
   * @export
   * @interface minLevel
   */
  export interface minLevel {
    /**
     * The label text for the minimum level value.
     * @type {string}
     */
    label: string;
    /**
     * The minimum level value.
     * @type {number}
     */
    amount: number;
  }
  /**
   * An interface representing the maximum level value of the level field.
   * @export
   * @interface maxLevel
   */
  export interface maxLevel {
    /**
     * The label text for the minimum level value.
     * @type {string}
     */
    label: string;
    /**
     * The maximum level value
     *
     * @type {number}
     */
    amount: number;
  }
}
