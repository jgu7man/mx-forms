## MxDateField
This component is used to display a date input field with a calendar picker.
MxDateField is a class that defines the configuration for a date input field in an Angular application. Extends the MxField class.

### Usage
In your Angular component template, add the following:

```html
<mx-date-field [field]="dateField"></mx-date-field>
```

```ts
import { Component } from '@angular/core';
import { MxDateField } from '@marxa/forms';

@Component({
  selector: 'app-root',
  template: `
    <form>
      <mx-date-field [field]="dateField"></mx-date-field>
    </form>
  `
})
export class AppComponent {
  dateField: MxDateField = new MxDateField(
    'date',
    'Date',
    'Enter date',
    'Select a date within the given range',
    'primary',
    'calendar_today',
    {
      cancel: {
        label: 'Cancel',
        color: 'warn'
      },
      accept: {
        label: 'Accept',
        color: 'primary'
      }
    },
    {
      min: new Date('1900-01-01'),
      max: new Date(),
      message: 'Please select a date between 1900 and today.'
    }
  );
}
```

You can set the format using the following configuration options on the module where you use this component:

```ts
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { NgModule } from '@angular/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class MyModule {}
```


### Properties
The class has several properties that define the behavior and appearance of the date input field, including:

| Property | Description | Type |
|----------|-------------|------|
| field    | The configuration for the date field. Must implement the MxField.DATE interface. | MxField.DATE |

`id`: a unique identifier for the field
`label`: the label text for the field
`placeholder`: the placeholder text to display in the input field
`info`: additional information about the field
`color`: the color for accent the colors on the datepicker
`toggleIcon`: the icon to be displayed on the toggle button of the calendar
`actionButtons`: an object containing the custom labels and handlers for the action buttons
`limits`: the date range limits to be set on the calendar
`workWeek`: whether to display only the work week (Monday-Friday) on the calendar
`inputDisable`: whether to disable the input field of the calendar
`visible`: whether the field is visible or hidden
`required`: whether the field is required or optional
`disable`: whether the field is disabled or enabled
`additionalValidations`: an array of additional validation rules for the field

MxDateField also has two inner interfaces, `ActionButtons` and `Limits`, that define the types of the `actionButtons` and `limits` properties, respectively.


#### Example 
```html
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
  }"
></mx-date-field>
```

### Contributing
We welcome contributions to **MxDateFieldComponent**! If you would like to contribute, please open an issue or submit a pull request on our GitHub repository.

### License
**MxDateFieldComponent** is released under the MIT License.
