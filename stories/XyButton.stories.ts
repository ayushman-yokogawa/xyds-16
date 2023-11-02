// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {XyButtonComponent, XyButtonModule} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'XYdesignsystem/XyButton',
  component: XyButtonComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {
    'id': {
      name: 'ID',
      description: `<xy-sb-description>
                    <xy-sb-ja>IDを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the ID.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'ybt1',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'name': {
      description: `<xy-sb-description>
                    <xy-sb-ja>名前を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the name.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'name',
      control: 'text',
      defaultValue: 'name',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'content': {
      description: `<xy-sb-description>
                    <xy-sb-ja>ラベルを指定します。<br/>\`Text Button\` \`Outline Button\` \`Standard Button\` で有効。</xy-sb-ja><br/>
                    <xy-sb-en>Set the label.<br/>Only effective for \`Text Button\`, \`Outline Button\`, and \`Standard Button\`.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'XyButton',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
    'icon': {
      description: `<xy-sb-description>
                    <xy-sb-ja>アイコンを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the icon.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'home',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
    //INPUTS
    'button-type': {table: {disable: true}},
    'buttonType': {
      name: 'button-type',
      description: `<xy-sb-description>
                    <xy-sb-ja>ボタンの外観を選択します。</xy-sb-ja><br/>
                    <xy-sb-en>Select the button appearance.</xy-sb-en>
                    - \`text-button\` Text Button
                    - \`light-weight-button\` Outline Button
                    - \`standard-button\` Standard Button
                    - \`icon-button\` Icon Button
                    </xy-sb-description>`,
      options: ['text-button', 'light-weight-button', 'standard-button', 'icon-button'],
      control: {
        type: 'select',
        labels: {
          'text-button': 'Text Button',
          'light-weight-button': 'Outline Button',
          'standard-button': 'Standard Button',
          'icon-button': 'Icon Button',
        },
      },
      defaultValue: 'standard-button',
      type: {name: 'string', required: true},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'standard-button'},
      },
    },
    'color': {
      description: `<xy-sb-description>
                    <xy-sb-ja>ボタン色を選択します。</xy-sb-ja><br/>
                    <xy-sb-en>Select the button color.</xy-sb-en>
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
    'defaultFocus': {table: {disable: true}},
    'default-focus': {
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>XyDialogの読み込み時にフォーカスをセットします。</xy-sb-ja><br/>
                    <xy-sb-en>Set focus when loading XyDialog.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'tabindex': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォームでの表示順序を数値で指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the order of display by numbers on the form.</xy-sb-en>
                    </xy-sb-description>`,
      defaultValue: null,
      table: {
        type: {summary: null},
        defaultValue: {summary: null},
      },
    },
    'aria-label': {table: {disable: true}},
    'cdkFocusInitial': {table: {disable: true}},
    'disableRipple': {table: {disable: true}},
    '_disableRipple': {table: {disable: true}},
    'fab-button': {table: {disable: true}},
    'icon-button': {table: {disable: true}},
    'light-weight-button': {table: {disable: true}},
    'mini-fab-button': {table: {disable: true}},
    'standard-button': {table: {disable: true}},
    'text-button': {table: {disable: true}},
    //PROPERTIES
    'disabled': { table: {disable: true}},
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
    'hasIcon': {table: {disable: true}},
    BUTTON_TYPE_FAB_BUTTON: {table: {disable: true}},
    BUTTON_TYPE_ICON_BUTTON: {table: {disable: true}},
    BUTTON_TYPE_LIGHT_WEIGHT_BUTTON: {table: {disable: true}},
    BUTTON_TYPE_MINI_FAB_BUTTON: {table: {disable: true}},
    BUTTON_TYPE_PROMINENT_BUTTON: {table: {disable: true}},
    BUTTON_TYPE_STANDARD_BUTTON: {table: {disable: true}},
    BUTTON_TYPE_TEXT_BUTTON: {table: {disable: true}},
    //METHODS
    'blur': {
      name: 'blur',
      description: `<xy-sb-description>
                    <xy-sb-ja>フォーカスアウトイベント。<br/>パラメータクラス: \`FocusEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Focus out event.<br/>Parameter Class: \`FocusEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'click': {
      name: 'click',
      description: `<xy-sb-description>
                    <xy-sb-ja>マウスクリックイベント。<br/>パラメータクラス: \`MouseEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Mouse click event.<br/>Parameter Class: \`MouseEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'focus': {
      name: 'focus',
      description: `<xy-sb-description>
                    <xy-sb-ja>フォーカスイベント。<br/>パラメータクラス: \`FocusEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Focus event.<br/>Parameter Class: \`FocusEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'ngAfterViewInit': {table: {disable: true}},
    'ngOnInit': {table: {disable: true}},
    'onBlur': {table: {disable: true}},
    'onClick': {table: {disable: true}},
    'onFocus': {table: {disable: true}},
    //VIEW CHILD
    'matButton': {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyButtonModule, MatIconModule],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<XyButtonComponent> = (args) => ({
  props: args,
  template: `
    <xy-button button-type="${args.buttonType}" color="${args.color}" tabindex="${args.tabindex}" icon="${args.icon}" disabled="${args._disabled}">${args.content}</xy-button>`,
});
// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const TextButton = Template.bind({});
TextButton.args = {
  buttonType: 'text-button'
};
export const OutlineButton = Template.bind({});
OutlineButton.args = {
  buttonType: 'light-weight-button'
};
export const StandardButton = Template.bind({});
StandardButton.args = {
  buttonType: 'standard-button'
};
export const IconButton = Template.bind({});
IconButton.args = {
  buttonType: 'icon-button'
};

