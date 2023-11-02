// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import { XyBadgeComponent, XyBadgeModule, XyButtonModule, XyChipsComponent, XyChipsModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';

export default {
    title: 'XYdesignsystem/XyChips',
    component: XyChipsComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [MatIconModule, MatChipsModule, XyChipsModule],
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
    }
}


const chips: Story<XyChipsComponent> = (args: XyChipsComponent) => ({
  component: XyChipsComponent,
  props: args,
  template: `
    <xy-chips-list>
        <xy-chips chipsLabel="First Item" ></xy-chips>
        <xy-chips chipsLabel="Second Item" ></xy-chips>
        <xy-chips chipsLabel="Third Item"></xy-chips>
    </xy-chips-list>
    `,
});
export const DefaultChips = chips.bind({});
DefaultChips.args = { 
  
};

const chipsAvatar: Story<XyChipsComponent> = (args: XyChipsComponent) => ({
  component: XyChipsComponent,
  props: args,
  template: `
  <xy-chips-list>
    <xy-chips chipsLabel="First Item" [selected]="true" [checked]="true" [removeBtn]="true"></xy-chips>
    <xy-chips chipsLabel="Second Item" [removeBtn]="true" ></xy-chips>
    <xy-chips chipsLabel="Third Item"></xy-chips>
  </xy-chips-list>
    `,
});
export const AvatarChips = chipsAvatar.bind({});
AvatarChips.args = { 
  
};





