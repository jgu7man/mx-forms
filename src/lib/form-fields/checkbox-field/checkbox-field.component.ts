import { Component, Input } from '@angular/core';
import { MxDefaultFieldComponent } from '../default-field/default-field.component';
import { MxField } from '../field.model';
import { MxCheckboxField } from './checkbox-field.model';

@Component({
  selector: 'mx-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class MxCheckboxFieldComponent extends MxDefaultFieldComponent {
  @Input() set field({ ...field }: MxField.CHECKBOX) {
    const defaultProperties = new MxCheckboxField('', '');
    this._field.next({ ...defaultProperties, ...field });
  }
}
