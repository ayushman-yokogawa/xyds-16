// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import { XyBadgeComponent, XyBadgeModule, XyButtonModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule } from '@angular/material/badge';

export default {
    title: 'XYdesignsystem/XyBadge',
    component: XyBadgeComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [MatIconModule, XyBadgeModule, XyButtonModule, MatBadgeModule],
      }),
    ],
    argTypes: {
      'content': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en></xy-sb-en>
                      </xy-sb-description>`,
        control: 'text',
        defaultValue: 'XyBadge',
        type: {name: 'string', required: false},
        table: {
          type: {summary: null},
        },
      },
      'matBadge': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en>
                      </xy-sb-en>
                      </xy-sb-description>`,
        name: 'matBadge',
        control: 'text',
        type: {name: 'string'},
        table: {
          type: {summary: null},
          defaultValue: {summary: null}
      },
      },
      'class': {   
        name: 'CLASS',
        description: `<xy-sb-description>
                      <xy-sb-ja>Change badge color</xy-sb-ja><br/>
                      <xy-sb-en>Set the Class.<br/>\`Accent Badge\`, \`Critical Badge\`, and \`Warn Badge\`.</xy-sb-en>
                      </xy-sb-description>`,

        options: [
          `accent-badge`,
          `critical-badge`,
          `warn-badge`,
          `default-accent`,
          `default-critical`,
          `default-warn`,
        ],
        control: {
          type: 'select',
          labels: {
            'accent-badge': 'Accent Badge',
            'critical-badge': 'Critical Badge',
            'warn-badge': 'Warn Badge',
            'default-accent': 'Default Accent',
            'default-critical': 'Default Critical',
            'default-warn': 'Default Warn',
          },
        },
        defaultValue: 'accent-badge',
        type: {name: 'string'},
        table: {
          type: {summary: null},
          defaultValue: {summary: null}
        },
      },
      'size': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en>Select the Badge Size.</xy-sb-en>
                      - \`large\` Large
                      - \`medium\` Medium
                      - \`small\` Small
                      </xy-sb-description>`,
        options: [`large`, `medium`, `small`],
        control: {
          type: 'select',
          labels: {
            'large': 'Large',
            'medium': 'Medium',
            'small': 'Small',
          },
        },
        defaultValue: 'small',
        type: {name: 'string', required: true},
        table: {
          type: {summary: null},
          defaultValue: {summary: 'small'},
        },
      },
    }
}
const TemplateFlatBadge: Story<XyBadgeComponent> = (args: XyBadgeComponent) => ({
  component: XyBadgeComponent,
  props: args,
  template: `
   <xy-badge 
     matBadge="${args.matBadge}"
     class="${args.class}"
     size="${args.size}">
      ${args.content}
   </xy-badge>`,
  
});
const TemplateButtonBadge: Story<XyBadgeComponent> = (args: XyBadgeComponent) => ({
  component: XyBadgeComponent,
  props: args,
  template: `
   <xy-badge 
     matBadge="${args.matBadge}"
     class="${args.class}"
     size="${args.size}">
      <xy-button standard-button color="accent" >Button</xy-button>
   </xy-badge>
   `,
});
const TemplateIconBadge: Story<XyBadgeComponent> = (args: XyBadgeComponent) => ({
  component: XyBadgeComponent,
  props: args,
  template: `
   <xy-badge 
     matBadge="${args.matBadge}"
     class="${args.class}"
     size="${args.size}">
      <mat-icon>notifications_none</mat-icon>
   </xy-badge>
   `,
});
export const TextBadgeSize = TemplateFlatBadge.bind({});
TextBadgeSize.args = { 
  matBadge : '3',
  size: 'large',
  class: 'text-accent',
  content: 'Large Badge'
};
export const ButtonBadge = TemplateButtonBadge.bind({});
ButtonBadge.args = { 
  matBadge : '3',
  size: 'medium',
  class: 'accent-badge'
};

export const IconBadge = TemplateIconBadge.bind({});
IconBadge.args = { 
  matBadge : '3',
  size: 'medium',
  class: 'warn-badge'
};




