// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {XyButtonToggleComponent, XyButtonToggleGroupComponent} from "projects/xy-designsystem/src/public-api";
import {Meta, Story} from '@storybook/angular/types-6-0';
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";

export default {
  title: 'XYdesignsystem/XyButtonToggle',
  component: XyButtonToggleGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [XyButtonToggleGroupComponent, XyButtonToggleComponent],
      imports: [MatButtonToggleModule,  MatIconModule],
    }),
    componentWrapperDecorator(story => `${story}`),
  ],
  argTypes: {
    id: {
      name: 'ID',
      description: `<xy-sb-description>
                    <xy-sb-ja>IDを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the ID.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'ybtg1',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    name: {
      description: `<xy-sb-description>
                    <xy-sb-ja>名前を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the name.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'name',
      control: 'text',
      defaultValue: 'name1',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'value': {table: {disable: true}},
    _value: {
      description: `<xy-sb-description>
                    <xy-sb-ja>値を指定します。<br/>
                    選択するボタンの値をstringで指定します。<br/>
                    例) \`'favorite'\`<br/>
                    複数選択の場合は配列で指定します。<br/>
                    例) \`['favorite','visibility']\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Set the value.<br/>
                    Set the value of the selected button by a string.<br/>
                    e.g.) \`'favorite'\`<br/>
                    For multiple selections, set in array.<br/>
                    e.g.) \`['favorite','visibility']\`</xy-sb-en>
                    </xy-sb-description>`,
      name: 'value',
      control: 'text',
      defaultValue: 'favorite',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'tabindex': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォームでの表示順序を数値で指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the order of display by numbers on the form.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'number',
      defaultValue: null,
      type: {name: 'number'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null},
      },
    },
    'disabled': {table: {disable: true}},
    '_disabled': {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>ボタンを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the button.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'multiple': {table: {disable: true}},
    '_multiple': {
      name: 'multiple',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>複数選択を有効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Enable multiple selections.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'formControl': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォームコントロールを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the form control.</xy-sb-en>
                    </xy-sb-description>`,
      control: {type: null},
      table: {
        type: {summary: null},
      },
    },
    'formGroup': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォームグループを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the form group.</xy-sb-en>
                    </xy-sb-description>`,
      control: {type: null},
      table: {
        type: {summary: null},
      },
    },
    dataSource: {table: {disable: true}},
    onChangeCallback: {table: {disable: true}},
    onTouchedCallback: {table: {disable: true}},

    //OUTPUTS
    change: {
      description: `<xy-sb-description>
                    <xy-sb-ja>変更イベントハンドラ<br/>パラメータクラス: \`MatButtonToggleChange\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Change event handler.<br/>Parameter Class: \`MatButtonToggleChange\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    //METHODS
//     'onChange': {
//       name: 'onChange',
//       description: `変更イベント。<br/>
// パラメータクラス: \`MatButtonToggleChange\`
//         `,
//       table: {type: {summary: null}, defaultValue: {summary: null},},
//       control: {type: null}
//     },
    ngOnInit: {table: {disable: true}},
    onChange: {table: {disable: true}},
    registerOnChange: {table: {disable: true}},
    registerOnTouched: {table: {disable: true}},
    writeValue: {table: {disable: true}},
    setDisabledState: {table: {disable: true}},
    ngAfterContentInit: {table: {disable: true}},
    //VIEW CHILD
    'buttons': {table: {disable: true}},
    errors: {table: {disable: true}},
  }
} as Meta;

const Template: Story<XyButtonToggleGroupComponent> = (args) => ({
  props: args,
  template: `
    <xy-button-toggle-group
      [id]="${args.id}"
      [name]="${args.name}"
      [value]="${args._value}"
      [multiple]="${args._multiple}"
      [disabled]="${args._disabled}"
      [tabindex]="${args.tabindex}"
      >
      <xy-button-toggle value="favorite" icon="favorite"></xy-button-toggle>
      <xy-button-toggle value="visibility" icon="visibility"></xy-button-toggle>
      <xy-button-toggle value="notifications" icon="notifications"></xy-button-toggle>
    </xy-button-toggle-group>
`
});

export const Basic = Template.bind({});
Basic.args = {
  dataSource: [
    {
      content: '',
      value: 'favorite',
      icon: 'favorite',
      _disabled: false,
    },
    {
      content: '',
      value: 'visibility',
      icon: 'visibility',
      _disabled: false,
    },
    {
      content: '',
      value: 'notifications',
      icon: 'notifications',
      _disabled: false,
    },
  ]
};
