// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {XyCheckboxComponent, XyCheckboxModule} from "projects/xy-designsystem/src/public-api";

export default {
  title: 'XYdesignsystem/XyCheckbox',
  component: XyCheckboxComponent,
  argTypes: {
    //INPUTS
    id: {
      name: 'id',
      description: `<xy-sb-description>
                    <xy-sb-ja>IDを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the ID.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'ycb1',
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
    label: {
      description: `<xy-sb-description>
                    <xy-sb-ja>チェックボックスのラベルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the checkbox's label.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'label',
      control: 'text',
      defaultValue: 'Checkbox',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    value: {
      description: `<xy-sb-description>
                    <xy-sb-ja>値を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the value.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'value',
      control: 'text',
      defaultValue: 'value',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    checked: {
      description: `<xy-sb-description>
                    <xy-sb-ja>状態を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the state.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null}
      },
    },
    content: {
      description: `<xy-sb-description>
                    <xy-sb-ja>ラベルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the label.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'XyCheckbox',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
    color: {
      description: `<xy-sb-description>
                    <xy-sb-ja>ボタン色を選択します。</xy-sb-ja><br/>
                    <xy-sb-en>Select the color.</xy-sb-en>
                    - \`accent\` Accent
                    - \`critical\` Critical
                    - \`error\` Error
                    - \`warning\` Warning
                    - \`attention\` Attention
                    - \`safe_normal\` Safe&Normal
                    </xy-sb-description>`,
      options: [`accent`, `critical`, `error`, `warning`, `attention`],
      control: {
        type: 'select',
        labels: {
          'accent': 'Accent',
          'critical': 'Critical',
          'error': 'Error',
          'warning': 'Warning',
          'attention': 'Attention',
          'safe_normal': 'Safe&Normal',
        },
      },
      defaultValue: 'accent',
      type: {name: 'string', required: true},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'accent'},
      },
    },
    tabindex: {
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
    'required': {table: {disable: true}},
    '_required': {
      name: 'required',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>チェックボックスの選択を必須にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the checkbox as required.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'aria-describedby': {table: {disable: true}},
    'aria-labelledby': {table: {disable: true}},
    'aria-label': {table: {disable: true}},
    'disableRipple': {table: {disable: true}},
    '_disableRipple': {table: {disable: true}},
    //PROPERTIES
    'disabled': {table: {disable: true}},
    '_disabled': {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>チェックボックスを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the checkbox.</xy-sb-en>
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
        defaultValue: {summary: null},
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
        defaultValue: {summary: null},
      },
    },
    //OUTPUT
    change: {
      description: `<xy-sb-description>
                    <xy-sb-ja>変更イベントハンドラ<br/>パラメータクラス: \`MatCheckboxChange\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Change event handler.<br/>Parameter Class: \`MatCheckboxChange\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    click: {
      description: `<xy-sb-description>
                    <xy-sb-ja>クリックイベントハンドラ<br/>パラメータクラス: \`MouseEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Click event handler.<br/>Parameter Class: \`MouseEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    '_onChangeCallback': {table: {disable: true}},
    '_onTouchedCallback': {table: {disable: true}},
    //METHODS
    'ngOnInit': {table: {disable: true}},
    'ngAfterViewInit': {table: {disable: true}},
    'registerOnChange': {table: {disable: true}},
    'registerOnTouched': {table: {disable: true}},
    'setDisabledState': {table: {disable: true}},
    'writeValue': {table: {disable: true}},
    'onChange': {table: {disable: true}},
    'onClick': {table: {disable: true}},
    'onFocus': {table: {disable: true}},
    'onBlur': {table: {disable: true}},
    //VIEW CHILD
    'checkbox': {table: {disable: true}},
    'checkboxInput': {table: {disable: true}},
    'errors': {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyCheckboxModule],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<XyCheckboxComponent> = (args: XyCheckboxComponent) => ({
  props: args,
  template: `
      <xy-checkbox
        id="${args.id}"
        name="${args.name}"
        value="${args.value}"
        disabled="${args._disabled}"
        checked="${args.checked}"
        color="${args.color}"
        tabindex=${args.tabindex}
        >
      ${args.label}
      </xy-checkbox>`,
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Basic = Template.bind({});
Basic.args = {
};
