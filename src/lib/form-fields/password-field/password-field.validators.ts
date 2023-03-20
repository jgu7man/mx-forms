import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export module PasswordValidators {
  /**
  Validates whether a password meets a minimum length requirement.
  @param {number} minLength - The minimum length required for the password.
  @returns {ValidatorFn} - A function that validates a password and returns a ValidationErrors object if the password does not meet the minimum length requirement.
   */
  export function minimumLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const hasLessThanMin = minLength && value.length < minLength;
      return { [PasswordValidators.TOKEN.MIN_LENGTH]: hasLessThanMin };
    };
  }
  /**
  Validates whether a password meets a maximum length requirement.
  @param {number} maxLength - The maximum length allowed for the password.
  @returns {ValidatorFn} - A function that validates a password and returns a ValidationErrors object if the password exceeds the maximum length.
  */
  export function maximumLengthValidator(maxLength: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const hasMoreThanMax = maxLength && value.length > maxLength;
      return { [PasswordValidators.TOKEN.MIN_LENGTH]: hasMoreThanMax };
    };
  }

  /**
  Validates whether a password contains both uppercase and lowercase characters.
  @param {AbstractControl} control - The password control being validated.
  @returns {ValidationErrors} - A ValidationErrors object if the password does not contain both uppercase and lowercase characters.
  */
  export const hasUpperCaseValidator = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;
    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    if (!hasLowerCase || !hasUpperCase) {
      return { [PasswordValidators.TOKEN.CHARACTER_CASE]: true };
    }
    return null;
  };

  /**
  Validates whether a password contains at least one numeric character.
  @param {AbstractControl} control - The password control being validated.
  @returns {ValidationErrors} - A ValidationErrors object if the password does not contain a numeric character.
  */
  export const hasCharNumbersValidator = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    return { [PasswordValidators.TOKEN.NUMBER_REQUIRED]: !hasNumber };
  };

  /**
  Validates whether a password contains at least one special character.
  @param {AbstractControl} control - The password control being validated.
  @returns {ValidationErrors} - A ValidationErrors object if the password does not contain a special character.
  */
  export const hasSpecialCharValidator = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const value = control.value;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return { [PasswordValidators.TOKEN.NUMBER_REQUIRED]: !hasSpecialChar };
  };
}

export namespace PasswordValidators {
  /**
   * An enum representing different types of password validation rules.
   *
   * @export
   * @enum {number}
   */
  export enum TOKEN {
    /**
     * The minimum length of the password.
     */
    MIN_LENGTH = 'minimumLength',
    /**
     * The maximum length of the password.
     */
    MAX_LENGTH = 'maximumLength',
    /**
     * The character case requirement of the password.
     */
    CHARACTER_CASE = 'characterCase',
    /**
     * Whether the password requires at least one number.
     */
    NUMBER_REQUIRED = 'requiresNumber',
    /**
     * Whether the password requires at least one special character.
     */
    SPECIAL_CHARACTERS_REQUIRED = 'requiresSpecialChar'
  }
}
