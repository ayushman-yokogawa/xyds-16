// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XyTabModule, XyTabGroupComponent, XyTabComponent, XyButtonModule} from "projects/xy-designsystem/src/public-api";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule } from '@angular/material/button';


export default {
  title: 'XYdesignsystem/XyTab',
  component: XyTabGroupComponent,
  argTypes: {
    'disabled': { table: {disable: true}},
    icon: {
      description: ``,
      control: 'text',
      defaultValue: '',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
    '_disabled': {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>タブを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the tab.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'dataSourceData': {table: {disable: true}},
    'dataSource': {table: {disable: true}},
    //   description: 'タブのデータモデルを指定します。<br/>' +
    //     '以下のインタフェースの配列で指定します。<br/>' +
    //     '<pre>interface XyTabItem {\n' +
    //     '  icon?: string,\n' +
    //     '  label: string,\n' +
    //     '  disabled?: boolean,\n' +
    //     '  content?: any,\n' +
    //     '}</pre>'
    //     ,
    //   table: {type: {summary: null}, defaultValue: {summary: null},},
    //   control: {type: null}
    // },
    //METHODS
    ngOnInit: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    //VIEW CHILD
    'tabs': {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyTabModule, MatTabsModule, BrowserAnimationsModule, MatButtonModule, XyButtonModule],
    }),
  ]
} as Meta;

const Template: Story<XyTabGroupComponent> = (args: XyTabGroupComponent) => ({
  props: args,
  template: `
    <xy-tab-group>
      <xy-tab label="First" icon="settings">
        <h4>
          Tab 1
        </h4>  
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi est totam libero voluptatem adipisci aut, minus blanditiis debitis numquam ducimus atque! Assumenda modi, nostrum vitae rerum error eveniet mollitia culpa!
        </p>
        <xy-button icon="check" color="accent">
            Action
        </xy-button>
      </xy-tab>
      <xy-tab label="Second" icon="settings">
        <h4>
          Tab 2
        </h4>  
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi est totam libero voluptatem adipisci aut, minus blanditiis debitis numquam ducimus atque! Assumenda modi, nostrum vitae rerum error eveniet mollitia culpa!
        </p>
        <xy-button icon="check" color="accent">
            Action
        </xy-button>
      </xy-tab>
      <xy-tab label="Third" icon="settings" disabled>
        <h4>
          Tab 3
        </h4>  
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi est totam libero voluptatem adipisci aut, minus blanditiis debitis numquam ducimus atque! Assumenda modi, nostrum vitae rerum error eveniet mollitia culpa!
        </p>
        <xy-button icon="check" color="accent">
            Action
        </xy-button>
      </xy-tab>
      <xy-tab label="Fourth" icon="settings">
        <h4>
          Tab 4
        </h4>  
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi est totam libero voluptatem adipisci aut, minus blanditiis debitis numquam ducimus atque! Assumenda modi, nostrum vitae rerum error eveniet mollitia culpa!
        </p>
        <xy-button icon="check" color="accent">
            Action
        </xy-button>
      </xy-tab>
    </xy-tab-group>
`
});

export const Basic = Template.bind({});
Basic.args = {};


