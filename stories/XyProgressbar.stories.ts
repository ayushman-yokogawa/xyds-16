// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import { XyProgressbarComponent, XyProgressbarModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import { MatProgressBarModule } from '@angular/material/progress-bar';

export default {
    title: 'XYdesignsystem/XyProgressbar',
    component: XyProgressbarComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [ XyProgressbarModule, MatProgressBarModule],
      }),
    ],
    argTypes: {
      'value': {
        description: ``,
        name: 'value',
        control: 'text',
        type: {name: 'string'},
        table: {
          type: {summary: null},
          defaultValue: {summary: 50}
      },
      },
      'color': {   
        name: 'color',
        description: ``,

        options: [
          `accent`,
          `critical`,
          `warning`
        ],
        control: {
          type: 'select',
          labels: {
            'accent': 'Accent',
            'critical': 'Critical',
            'warning': 'Warning'
          },
        },
        defaultValue: 'accent',
        type: {name: 'string'},
        table: {
          type: {summary: null},
          defaultValue: {summary: 'accent'}
        },
      },
      'mode': {
        description: ``,
        options: [`determinate`, `indeterminate`, `buffer`,`query`],
        control: {
          type: 'select',
          labels: {
            'determinate': 'Determinate',
            'indeterminate': 'Indeterminate',
            'buffer': 'Buffer',
            'query': 'Query',
          },
        },
        defaultValue: 'determinate',
        type: {name: 'string', required: true},
        table: {
          type: {summary: null},
          defaultValue: {summary: 'determinate'},
        },
      },
    }
}
const Template: Story<XyProgressbarComponent> = (args: XyProgressbarComponent) => ({
  component: XyProgressbarComponent,
  props: args,
  template: `
   <xy-progressbar value=${args.value} color="${args.color}" mode="${args.mode}" label="${args.label}" help="${args.help}"></xy-progressbar>`
});
export const Basic = Template.bind({});
Basic.args = {
    value: 50,
    mode:'determinate',
    color:'accent',
    label:"Progress Bar",
    help:"Optional text"
};






