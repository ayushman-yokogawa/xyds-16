// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {XyBadgeModule, XyButtonModule, XySnackbarComponent, XySnackbarModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import { MatSnackBarModule } from '@angular/material/snack-bar';


export default {
    title: 'XYdesignsystem/XySnackbar',
    component: XySnackbarComponent,
    parameters: {
    controls: { sort: 'requiredFirst' }},
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyButtonModule, XySnackbarModule, MatSnackBarModule],
      }),
    ],
    argTypes: {
        'content': {
            description: ``,
            control: 'text',
            type: {name: 'string', required: false},
            table: {
              type: {summary: null},
            },
          },
          'click': {
            name: 'click',
            description: ``,
            table: {type: {summary: null}, defaultValue: {summary: null},},
            control: {type: null}
          },
        'onClick': {table: {disable: true}},
        'ngOnInit': {table: {disable: true}},
    }
}

const Template: Story<XySnackbarComponent> = (args: XySnackbarComponent) => ({
  component: XySnackbarComponent,
  props: args,
  template: `
    <xy-snackbar  icon="delete"  [value]="1666666000" action="true"  (myEvent)="onMyEvent2()"> 
      <xy-button color="accent" standard-button (click)="accept()">Yes</xy-button>
      <xy-button color="accent" text-button (click)="cancel()">No</xy-button>
    </xy-snackbar>
  `,
});

export const Snackbar = Template.bind({});
Snackbar.args = { 

};




