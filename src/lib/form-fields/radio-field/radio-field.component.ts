import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxRadioField } from './radio-field.model';

@Component({
  selector: 'mx-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss']
})
export class MxRadioFieldComponent extends MxDefaultFieldComponent {
  @Input() set field({ ...field }: MxField.RADIO) {
    const defaultProperties = new MxRadioField('', '');
    this._field.next({ ...defaultProperties, ...field });
  }
}
