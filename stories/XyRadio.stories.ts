// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {XyRadioComponent} from "projects/xy-designsystem/src/public-api";
import {MatRadioChange, MatRadioModule} from "@angular/material/radio";

export default {
  title: 'XYdesignsystem/XyRadio',
  component: XyRadioComponent,
  excludeStories: /.*[XyRadioComponent]$/,
  argTypes: {
    //INPUTS
    id: {
      name: 'id',
      description: `<xy-sb-description>
                    <xy-sb-ja>IDを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the ID.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'yrd1',
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
                    <xy-sb-ja>ラジオボタンのラベルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the radio's label.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'label',
      control: 'text',
      defaultValue: 'Radio',
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
    'color': {
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
    group: {table: {disable: true}},
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
                    <xy-sb-ja>ラジオボタンを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the radio.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'checked': {table: {disable: true}},
    '_checked': {
      name: 'checked',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>状態を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the state.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'required': {table: {disable: true}},
    '_required': {
      name: 'required',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>チェックボックスの選択を必須にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the radio as required.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    //OUTPUT
    change: {
      description: `<xy-sb-description>
                    <xy-sb-ja>変更イベントハンドラ<br/>パラメータクラス: \`MatRadioChange\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Change event handler.<br/>Parameter Class: \`MatRadioChange\`</xy-sb-en>
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
    //METHODS
    ngOnInit: {table: {disable: true}},
    onChange: {table: {disable: true}},
    onClick: {table: {disable: true}},
    onFocus: {table: {disable: true}},
    onBlur: {table: {disable: true}},
    styleClass: {table: {disable: true}},
    //VIEW CHILD
    radio: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [XyRadioComponent],
      imports: [CommonModule, MatRadioModule],
    }),
  ],
  args: {},
} as Meta;

const Template: Story<XyRadioComponent> = (args: XyRadioComponent) => ({
  props: args,
  template: `
      <xy-radio
        id="${args.id}"
        name="${args.name}"
        value="${args.value}"
        disabled="${args._disabled}"
        checked="${args._checked}"
        color="${args.color}"
        tabindex=${args.tabindex}
        >
      ${args.label}
      </xy-radio>`,
});

export const Basic = Template.bind({});
Basic.args = {

};
