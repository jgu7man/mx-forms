import { PasswordValidations } from '../form-fields/password-field/password-validation.model';

export const ValidationMessages = {
  EMAIL: 'Use a valid email address',
  REQUIRED: 'This field is required',
  PHONE: 'This no looks like a phone'
};

export const PasswordValidationsMessages = {
  MIN_LENGTH: PasswordValidations.MESSAGES.MIN_LENGTH,
  MAX_LENGTH: PasswordValidations.MESSAGES.MAX_LENGTH,
  CHARACTER_CASE: PasswordValidations.MESSAGES.CHARACTER_CASE,
  NUMBER_REQUIRED: PasswordValidations.MESSAGES.NUMBER_REQUIRED,
  SPECIAL_CHARACTERS_REQUIRED:
    PasswordValidations.MESSAGES.SPECIAL_CHARACTERS_REQUIRED
};
