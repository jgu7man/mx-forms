import { Inject } from '@angular/core';
import {
  PASSWORD_VALIDATION_MESSAGES_CONFIG,
  PasswordValidationsMessagesSlots
} from '../../messages/password-validation.messages';
import { MxField } from '../field.model';
import { PasswordValidators } from './password-field.validators';

export namespace PasswordValidations {
  /**
   * Configuration object for password validations.
   * @property {number} minimumLength - The minimum length required for a valid password.
   * @property {number} maximumLength - The maximum length allowed for a valid password.
   * @property {boolean} characterCase - Indicates whether a valid password must contain both upper and lower case characters.
   * @property {boolean} requiresNumber - Indicates whether a valid password must contain at least one number.
   * @property {boolean} requiresSpecialChar - Indicates whether a valid password must contain at least one special character.
   *
   * @export
   * @interface config
   */
  export interface config {
    minimumLength: number;
    maximumLength: number;
    characterCase: boolean;
    requiresNumber: boolean;
    requiresSpecialChar: boolean;
  }

  export module VALIDATORS {
    /**
    Validates whether a password meets a minimum length requirement.
    @param {number} minLength - The minimum length required for the password.
    @returns {Function} - A function that validates a password and returns a ValidationErrors object if the password does not meet the minimum length requirement.
    */
    export const minimumLength = PasswordValidators.minimumLengthValidator;
    /**
    Validates whether a password meets a maximum length requirement.
    @param {number} maxLength - The maximum length allowed for the password.
    @returns {Function} - A function that validates a password and returns a ValidationErrors object if the password exceeds the maximum length.
    */
    export const maximumLength = PasswordValidators.maximumLengthValidator;
    /**
    Validates whether a password contains both uppercase and lowercase characters.
    @param {AbstractControl} control - The password control being validated.
    @returns {ValidationErrors} - A ValidationErrors object if the password does not contain both uppercase and lowercase characters.
    */
    export const characterCase = PasswordValidators.hasCharNumbersValidator;
    /**
    Validates whether a password contains at least one numeric character.
    @param {AbstractControl} control - The password control being validated.
    @returns {ValidationErrors} - A ValidationErrors object if the password does not contain a numeric character.
    */
    export const requiresNumber = PasswordValidators.hasCharNumbersValidator;
    /**
    Validates whether a password contains at least one special character.
    @param {AbstractControl} control - The password control being validated.
    @returns {ValidationErrors} - A ValidationErrors object if the password does not contain a special character.
    */
    export const requiresSpecialChar =
      PasswordValidators.hasSpecialCharValidator;
  }
}

export interface PasswordValidations {
  minimumLength: MxField.validation;
  maximumLength: MxField.validation;
  characterCase: MxField.validation;
  requiresNumber: MxField.validation;
  requiresSpecialChar: MxField.validation;
}

/**
 * Defines the configuration object for a password field.
@typedef {Object} PasswordField
@property {string} id - The ID of the password field.
@property {string} label - The label of the password field.
@property {boolean} required - Whether the password field is required or not.
@property {boolean} visible - Whether the password field is visible or not.
@property {MxField.Type} type - The type of the password field.
@property {MxPasswordField} validations - An object containing the password field validations.
 *
 * @export
 * @Class MxPasswordField
 * @extends {Omit<MxField, 'type'>}
 */
export class PasswordValidationsModel implements PasswordValidations {
  /**
   * Creates an instance of InitPasswordValidations.
   * @param {PasswordValidations.config} [config={
   *       minimumLength: 8,
   *       maximumLength: 20,
   *       characterCase: false,
   *       requiresNumber: false,
   *       requiresSpecialChar: false
   *     }]
   */
  constructor(
    config: PasswordValidations.config = {
      minimumLength: 8,
      maximumLength: 20,
      characterCase: false,
      requiresNumber: false,
      requiresSpecialChar: false
    },
    @Inject(PASSWORD_VALIDATION_MESSAGES_CONFIG)
    private validationMessages?: PasswordValidationsMessagesSlots
  ) {
    this.minimumLength = {
      token: PasswordValidators.TOKEN.MAX_LENGTH,
      message: validationMessages!.MAX_LENGTH,
      validator: PasswordValidations.VALIDATORS.minimumLength(
        config.minimumLength
      )
    };
    this.maximumLength = {
      token: PasswordValidators.TOKEN.MAX_LENGTH,
      message: validationMessages!.MIN_LENGTH,
      validator: PasswordValidations.VALIDATORS.maximumLength(
        config.maximumLength
      )
    };
    this.characterCase = {
      token: PasswordValidators.TOKEN.CHARACTER_CASE,
      message: validationMessages!.CHARACTER_CASE,
      validator: PasswordValidations.VALIDATORS.characterCase
    };
    (this.requiresNumber = {
      token: PasswordValidators.TOKEN.NUMBER_REQUIRED,
      message: validationMessages!.NUMBER_REQUIRED,
      validator: PasswordValidations.VALIDATORS.requiresNumber
    }),
      (this.requiresSpecialChar = {
        token: PasswordValidators.TOKEN.SPECIAL_CHARACTERS_REQUIRED,
        message: validationMessages!.SPECIAL_CHARACTERS_REQUIRED,
        validator: PasswordValidations.VALIDATORS.requiresSpecialChar
      });
  }

  /**
   * Password validation rule object for minimum length.
   * @type {MxField.validation}
   */
  minimumLength: MxField.validation;
  /**
   * Password validation rule object for maximum length.
   *
   * @type {MxField.validation}
   */
  maximumLength: MxField.validation;
  /**
   * Password validation rule object for character case.
   *
   * @type {MxField.validation}
   */
  characterCase: MxField.validation;
  /**
   * Password validation rule object for requiring at least one number.
   *
   * @type {MxField.validation}
   */
  requiresNumber: MxField.validation;
  /**
   * Password validation rule object for requiring at least one special character.
   *
   * @type {MxField.validation}
   */
  requiresSpecialChar: MxField.validation;
}
