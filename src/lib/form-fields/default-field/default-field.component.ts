import {
  AfterContentChecked,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { skip, skipWhile, takeUntil } from 'rxjs/operators';
import { DefaultValueByType, setValue } from '../../shared/helpers';
import { MxField } from '../field.model';

@Component({
  selector: 'mx-default-field',
  templateUrl: './default-field.component.html',
  styleUrls: ['./default-field.component.scss']
})
export class MxDefaultFieldComponent implements OnInit {

  private _field = new BehaviorSubject<MxField | null>(null);
  @Input() set field(field: MxField | null) {
    this._field.next(field);
  }

  private _value = new BehaviorSubject<any>(null);
  @Input() set value(v: any) {
    this._value.next(v);
  }

  @Input() control: FormControl = new FormControl('');
  @Input() controlChange: EventEmitter<FormControl> = new EventEmitter();

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  @Output() getValue: EventEmitter<any> = new EventEmitter();

  @HostListener('keyup')
  @HostListener('blur')
  emitResults(): void {
    this.controlChange.emit(this.control);
    this.valueChange.emit({
      [this.field?.id || 'key']: this.control.value
    });
  }

  async ngOnInit() {
    if (!this.field) throw new Error('field-missing');
    this.prepareField();
  }

  prepareField(): void {
    combineLatest([this._field, this._value])
      .pipe(skip(1), skipWhile(this.takeWhileLoad), takeUntil(this._destroyed))
      .subscribe(([field, value]) => {
        if (field) this.value = setValue(field, value);
        if (value) this.control.patchValue(value);
        this.setValidators();
      });
  }

  private _destroyed = new Subject<void>();
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  takeWhileLoad = ([field, value]: [MxField | null, any]) =>
    !field && (value === undefined || value === null);

  setValidators(): void {
    const validators = (this.field?.additionalValidations || []).map(
      (v) => v.validator
    );

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
