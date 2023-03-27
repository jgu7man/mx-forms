import { Component, Input } from '@angular/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxDateField } from './date-field.model';
const moment = _rollupMoment || _moment;
export const DEFAULT_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

/**
 * Component to display and manage a date field.
 * @example
  <mx-date-field
    [field]="{
    id: 'date',
    label: 'Date',
    placeholder: 'Enter date',
    info: 'Select a date within the given range',
    required: true,
    visible: true,
    disable: false,
    color: 'primary',
    toggleIcon: 'calendar_today',
    actionButtons: { cancel: { label: 'Cancel', color: 'warn' }, accept: { label: 'Accept', color: 'primary' } },
    limits: { min: new Date('1900-01-01'), max: new Date(), message: 'Please select a date between 1900 and today.' },
    workWeek: false,
    inputDisable: true,
    additionalValidations: []
  </mx-date-field>

  // You can set the format using the following  configuration options on the module where you instances this.
  @NgModule({
    providers: [
      { provide: MAT_DATE_FORMATS, useValue:  <MatDateFormats>{
      parse: {
        dateInput: 'LL'
      },
      display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    },
// Also. Set the locale like this:
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' }
   ]
  })
  export class MyModule {}
 *
 * @export
 * @class MxDateFieldComponent
 * @extends {MxDefaultFieldComponent}
 */
@Component({
  selector: 'mx-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: DEFAULT_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX' }
  ]
})
export class MxDateFieldComponent extends MxDefaultFieldComponent {
  /**
   * Indicates whether the work week option is enabled.
   *
   * @private
   * @type {boolean}
   */
  private _workWeek: boolean = false;
  /**
   * Sets the value of the field and the work week option.
   *
   * @param {MxField.DATE} { workWeek, ...field } The configuration for the field.
   */
  @Input() set field({ workWeek, ...field }: MxField.DATE) {
    const defaultProperties = new MxDateField('', '');
    this.control.setValue(moment());
    this.workWeek = workWeek;
    this._field.next({ ...defaultProperties, ...field });
  }
  /**
   * Sets the value of the work week option.
   *
   * @param {boolean} enable Indicates whether to enable the work week option.
   */
  set workWeek(enable: boolean) {
    this._workWeek = enable;
  }
  /**
   * Gets the value of the work week option.
   *
   * @readonly
   * @type {boolean}
   */
  get workWeek() {
    return this._workWeek;
  }
  /**
   * Enables or disables dates that are not within the work week.
   *
   * @memberof MxDateFieldComponent
   * @param {(Date | null)} d The date to check.
   * @returns {boolean} True if the date is within the work week; false otherwise.
   */
  enableWorkWeek = (d: Date | null): boolean => {
    if (this.workWeek) {
      const day = (d || new Date()).getDay();
      return day !== 0 && day !== 6;
    }
    return false;
  };
}
