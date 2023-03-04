import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { skipWhile, takeUntil } from 'rxjs/operators';
import { setValue } from '../../shared/helpers';
import { MxField } from '../field.model';

/**
Base component for fields as input HTML element
@class MxDefaultFieldComponent
@implements {OnInit}
*/
@Component({
  selector: 'mx-default-field',
  templateUrl: './default-field.component.html',
  styleUrls: ['./default-field.component.scss']
})
export class MxDefaultFieldComponent implements OnInit {
  /**
   * A behavior subject that emits the current MxField object.
   * @protected
   * @type {BehaviorSubject<MxField>}
   * @memberof MxDefaultFieldComponent
   */
  protected _field: BehaviorSubject<MxField> = new BehaviorSubject<MxField>({
    type: MxField.type.TEXT,
    id: 'undefined-field',
    label: 'Label',
    required: false,
    visible: true
  });
  private _value: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /**
   * Inherits a control form parent form component from
   * @type {FormControl}
   */
  @Input() control: FormControl = new FormControl('');

  /**
   * Receives the field configuration
   * @param {MxField} field - The new value of _field
   * @memberof MxDefaultFieldComponent
   */
  @Input() set field(field: MxField) {
    this._field.next(field);
  }

  /**
   * Receives the value of the field
   * @param {any} v - The new value of _field
   */
  @Input() set value(v: any) {
    this._value.next(v);
  }

  /**
   * Outputs the form control changes.
   * @type {EventEmitter<FormControl>}
   */
  @Output() controlChange: EventEmitter<FormControl> = new EventEmitter();

  /**
   * Outputs the value changes of the form control
   * @type {EventEmitter<any>}
   */
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  /**
   * Emits changes in the FormControl and value properties to parent components.
   * @returns {void}
   */
  @HostListener('keyup')
  @HostListener('blur')
  emitResults(): void {
    this.controlChange.emit(this.control);
    this.valueChange.emit({
      [this.field.id || 'undefined']: this.control.value
    });
  }

  /**
   * Defines the field configuration
   * @readonly
   * @type {MxField}
   */
  get field(): MxField {
    return this._field.getValue();
  }

  /**
   * Defines the field value
   * @readonly
   * @type {*}
   */
  get value(): any {
    return this._value.getValue();
  }

  /** @internal */
  ngOnInit() {
    this._prepareField();
  }

  /**
   * Prepares the field by combining the `_field` and `_value` BehaviorSubjects,
   * updating the value of the control, and setting the field validators.
   * @private
   */
  private _prepareField(): void {
    // Combine the `_field` and `_value` BehaviorSubjects and subscribe to them.
    combineLatest([this._field, this._value])
      // Skip values emitted while `_takeWhileLoad` returns true.
      .pipe(
        skipWhile(this._takeWhileLoad),
        // Unsubscribe when the component is destroyed.
        takeUntil(this._destroyed)
      )
      .subscribe(([field, value]) => {
        // If a field is provided, update the value.
        if (field) {
          // If a value is provided, update the control.
          if (value) {
            this._value.complete();
            this.control.patchValue(field ? setValue(field, value) : value);
          }
        }
        // Set the validators for the control based on the field configuration.
        this._setValidators();
      });
  }

  /** @internal */
  private _destroyed = new Subject<void>();
  /** @internal */
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  /** @internal */
  private _takeWhileLoad = ([field, value]: [MxField | null, any]) =>
    !field && (value === undefined || value === null);

  /** @internal */
  private _setValidators(): void {
    const validators = (this.field?.additionalValidations || []).map((v) => v.validator);

    this.control.setValidators(
      this.field?.required ? [Validators.required, ...validators] : validators
    );
  }
}

@Component({
  selector: 'mx-text-field, [mx-text-field], [mxTextField]',
  templateUrl: './default-field.component.html'
})
export class MxTextFieldComponent
  extends MxDefaultFieldComponent
  implements AfterContentChecked
{
  ngAfterContentChecked(): void {
    this.field!.type = MxField.type.TEXT;
  }
}

@Component({
  selector: 'mx-number-field, [mx-number-field], [mxNumberField]',
  templateUrl: './default-field.component.html'
})
export class MxNumberFieldComponent
  extends MxDefaultFieldComponent
  implements AfterContentChecked
{
  constructor(){
    super();
    this.control?.setValue(
      DefaultValueByType[MxField.type.NUMBER]
    )
  }
  ngAfterContentChecked(): void {
    this.field!.type = MxField.type.NUMBER;
  }
}
