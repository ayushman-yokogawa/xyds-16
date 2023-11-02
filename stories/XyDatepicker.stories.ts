// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {XyDatepickerComponent, XyDatepickerModule, XyExpensionPanelComponent} from 'projects/xy-designsystem/src/public-api';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
    title: 'XYdesignsystem/XyDatePicker',
    component: XyDatepickerComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyDatepickerModule, MatDatepickerModule, BrowserAnimationsModule],
      }),
    ],
    argTypes: {
    
      'placeholder': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en>
                      </xy-sb-en>
                      </xy-sb-description>`,
        name: 'title',
        control: 'text',
        type: {name: 'string'},
        table: {
          type: {summary: null},
          defaultValue: {summary: null}
      },
      },
    }
}




const datePickerTemp: Story<XyDatepickerComponent> = (args: XyDatepickerComponent) => ({
  component: XyExpensionPanelComponent,
  props: args,
  template: `
  <xy-datepicker lable="Choose date" small [datePicker]="true"></xy-datepicker>
   `,
   
});

export const DatePicker = datePickerTemp.bind({});
DatePicker.args = { 

};


const dateRangePickerTemp: Story<XyDatepickerComponent> = (args: XyDatepickerComponent) => ({
  component: XyExpensionPanelComponent,
  props: args,
  template: `
    <xy-datepicker [daterange]="true"></xy-datepicker>
   `,
   
});

export const DateRangePicker = dateRangePickerTemp.bind({});
DateRangePicker.args = { 

};






