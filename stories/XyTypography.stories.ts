// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {Component} from "@angular/core";

export default {
  title: 'XYdesignsystem/Typography',
  component: Component,
  argTypes: {
//     'type': {
//       description: `ボタンの外観を選択します。
// - \`display1\` Display 1
// - \`display2\` Display 2
// - \`heading\` heading / \\<h1\\>
// - \`title\` title / \\<h2\\>
// - \`subheading2\` subheading-2 / \\<h3\\>
// - \`subheading1\` subheading-1 / \\<h4\\>
// - \`body1\` body-1 / body text: Base body text.
// - \`body2\` body-2 / Bolder body text.
// - \`caption\` caption / Smaller body and hint text.`
// ,
//       options: ['display1', 'display2', 'heading', 'title', 'subheading2', 'subheading1', 'body1', 'body2', 'caption'],
//       control: {
//         type: 'select',
//         labels: {
//           'display1': 'Display 1',
//           'display2': 'Display 2',
//           'heading': 'heading / \<h1\>',
//           'title': 'title / \<h2\>',
//           'subheading2': 'subheading-2 / \<h3\>',
//           'subheading1': 'subheading-1 / \<h4\>',
//           'body1': 'body-1 / body text: Base body text.',
//           'body2': 'body-2 / Bolder body text.',
//           'caption': 'caption / Smaller body and hint text.',
//         },
//       },
//       defaultValue: null,
//       type: {name: 'string', required: false},
//       table: {
//         type: {summary: null},
//         defaultValue: {summary: null},
//       },
//     },
    content: {
      description: `<xy-sb-description>
                    <xy-sb-ja>テキストを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the contents.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Sample.',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ]
} as Meta;

const TemplateDisplay1: Story<Component> = (args: Component) => ({
  props: args,
  template: `<span class="mat-display-1">{{content}}</span>`
});

export const Display1 = TemplateDisplay1.bind({});
Display1.args = {};

const TemplateDisplay2: Story<Component> = (args: Component) => ({
  props: args,
  template: `<span class="mat-display-2">{{content}}</span>`
});

export const Display2 = TemplateDisplay2.bind({});
Display2.args = {};

const TemplateHeading: Story<Component> = (args: Component) => ({
  props: args,
  template: `<h1>{{content}}</h1>`
});

export const Heading = TemplateHeading.bind({});
Heading.args = {};

const TemplateTitle: Story<Component> = (args: Component) => ({
  props: args,
  template: `<h2>{{content}}</h2>`
});

export const Title = TemplateTitle.bind({});
Title.args = {};

const TemplateSubheading2: Story<Component> = (args: Component) => ({
  props: args,
  template: `<h2>{{content}}</h2>`
});

export const Subheading2 = TemplateSubheading2.bind({});
Subheading2.args = {};

const TemplateSubheading1: Story<Component> = (args: Component) => ({
  props: args,
  template: `<h3>{{content}}</h3>`
});

export const Subheading1 = TemplateSubheading1.bind({});
Subheading1.args = {};

const TemplateBody1: Story<Component> = (args: Component) => ({
  props: args,
  template: `<p class="mat-body">{{content}}</p>`
});

export const body1 = TemplateBody1.bind({});
body1.args = {};

const TemplateBody2: Story<Component> = (args: Component) => ({
  props: args,
  template: `<p class="mat-body-strong">{{content}}</p>`
});

export const body2 = TemplateBody2.bind({});
body2.args = {};

const TemplateCaption: Story<Component> = (args: Component) => ({
  props: args,
  template: `<p class="mat-body-caption">{{content}}</p>`
});

export const caption = TemplateCaption.bind({});
caption.args = {};
