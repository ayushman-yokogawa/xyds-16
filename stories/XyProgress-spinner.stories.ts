// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story} from '@storybook/angular/types-6-0';
import { XyProgressSpinnerComponent, XyProgressSpinnerModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import { MatProgressSpinner } from '@angular/material/progress-spinner';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
    title: 'XYdesignsystem/XyProgressSpinner',
    component: XyProgressSpinnerComponent,
    decorators: [
      moduleMetadata({
        declarations: [XyProgressSpinnerComponent, MatProgressSpinner],
        imports:[BrowserAnimationsModule]
      }),
    ],
    parameters: { controls: { sort: 'requiredFirst' } },
    argTypes: {
        'color': {
            description: ``,
            options: [`accent`, `critical`, `warn`, `error`, `attention`, `safe_normal`],
            control: {
              type: 'select',
              labels: {
                'accent': 'Accent',
                'critical': 'Critical',
                'warn': 'Warn',
                'error': 'Error',
                'attention': 'Attention',
                'safe_normal': 'Safe_Normal',
              },
            },
            type: {name: 'string', required: true},
            table: {
              type: {summary: null},
              defaultValue: {summary: 'accent'},
            },
        },
        'mode': {
            description: ``,
            options: [`determinate`, `indeterminate`],
            control: {
              type: 'radio',
              labels: {
                'determinate': 'Determinate',
                'indeterminate': 'Indeterminate',
              },
            },
            defaultValue: 'indeterminate',
            type: {name: 'string', required: true},
            table: {
              type: {summary: null},
              defaultValue: {summary: 'indeterminate'},
            },
        },
        'value': {
            description: ``,
            control: 'text',
            type: {name: 'string', required: false},
            table: {
              type: {summary: null},
              defaultValue: {summary: '50'},
            },
          },
    }
}
const Template: Story<XyProgressSpinnerComponent> = (args: XyProgressSpinnerComponent) => ({
  component: XyProgressSpinnerComponent,
  props: args,
  template: `
    <xy-progress-spinner 
        color="${args.color}" 
        mode="${args.mode}" 
        value="${args.value}">
    </xy-progress-spinner>
  `,
  
});

export const ProgressSpinner = Template.bind({});
ProgressSpinner.args = {
    color: 'accent',
    mode: 'determinate',
    value: 50
};
