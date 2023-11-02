// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/angular/types-6-0';
import {XyFooterComponent, XyFooterModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";


export default {
    title: 'XYdesignsystem/XyFooter',
    component: XyFooterComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyFooterModule],
      }),
    ],
    argTypes: {
      'content': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en></xy-sb-en>
                      </xy-sb-description>`,
        control: 'text',
        defaultValue: 'Yokoagava',
        type: {name: 'string', required: false},
        table: {
          type: {summary: null},
        },
      },
      'title': {
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

const TemplateButtonBadge: Story<XyFooterComponent> = (args: XyFooterComponent) => ({
  component: XyFooterComponent,
  props: args,
  template: `
   <xy-footer title="${args.title}" content="${args.content}">
        <a href="#">Terms & Condition</a>
        <a href="#">Privacy Guidelines</a>
        <a href="#">Terms & Condition</a>
    </xy-footer>
   `,
   
});

export const Footer = TemplateButtonBadge.bind({});
Footer.args = { 
  title : 'YOKOGAWA',
  content :"© 2020, Yokogawa Electric Corporation. All Rights Reserved"
};





