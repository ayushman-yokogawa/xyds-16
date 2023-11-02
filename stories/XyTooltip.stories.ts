// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/angular/types-6-0';
import {TooltipDirective, XyButtonModule, XyTooltipComponent, XyTooltipModule, XyTreeComponent} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
    title: 'XYdesignsystem/XyTooltip',
    component: XyTooltipComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyTooltipModule, XyButtonModule, BrowserAnimationsModule],
      }),
    ],
    argTypes: {
      'placement': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en>Select the Badge Size.</xy-sb-en>
                      - \`right\` Right
                      - \`left\` Left
                      - \`above\` Top
                      - \`below\` bottom
                      </xy-sb-description>`,
        options: [`right`, `left`, `below`, `above`],
        control: {
          type: 'select',
          labels: {
            'right': 'Right',
            'left': 'Left',
            'above': 'Above',
            'below': 'Below',
          },
        },
        defaultValue: 'right',
        type: {name: 'string', required: true},
        table: {
          type: {summary: null},
          defaultValue: {summary: 'right'},
        },
      },
      'tooltipClass': {
        description: ``,
        options: [`right`, `left`, `top`, `bottom`],
        control: {
          type: 'select',
          labels: {
            'xy-tooltip-right': 'xy-tooltip-right',
            'xy-tooltip-left': 'xy-tooltip-left',
            'xy-tooltip-top': 'xy-tooltip-top',
            'xy-tooltip-bottom': 'xy-tooltip-bottom',
          },
        },
        defaultValue: 'xy-tooltip-right',
        type: {name: 'string', required: true},
        table: {
          type: {summary: null},
          defaultValue: {summary: 'xy-tooltip-right'},
        },
      },
    }
}
const TamplateBasicTooltip: Story<XyTooltipComponent> = (args: XyTooltipComponent) => ({
  component: XyTooltipComponent,
  props: args,
  template: `
        <div style="text-align:center;">
          <xy-button color="accent" [tooltip]="'Tooltip'"
          [tooltipClass]="'xy-tooltip-${args.placement}'" 
          placement="${args.placement}">tootip on ${args.placement}</xy-button>
        </div>
    `
});

const Template: Story<XyTreeComponent> = (args: XyTreeComponent) => ({
  props: args
});


export const TooltipDefault = TamplateBasicTooltip.bind({});
TooltipDefault.args = { 
 
};






