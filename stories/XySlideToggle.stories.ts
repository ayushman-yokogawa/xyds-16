// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {XySlideToggleModule, XySlideToggleComponent} from "projects/xy-designsystem/src/public-api";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'XYdesignsystem/XySlideToggle',
  component: XySlideToggleComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    //INPUTS
    id: {
      name: 'id',
      description: `<xy-sb-description>
                    <xy-sb-ja>IDを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the ID.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'id-st1',
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
      defaultValue: 'input-st1',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    label: {
      description: `<xy-sb-description>
                    <xy-sb-ja>スライドトグルのラベルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the slide toggle's label.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'label',
      control: 'text',
      defaultValue: 'Slide Toggle',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'value': {
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
    labelPosition: {table: {disable: true}},
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
    _onChangeCallback: {table: {disable: true}},
    _onTouchedCallback: {table: {disable: true}},
    'aria-describedby': {table: {disable: true}},
    'aria-labelledby': {table: {disable: true}},
    'aria-label': {table: {disable: true}},
    'disableRipple': {table: {disable: true}},
    '_disableRipple': {table: {disable: true}},
    //PROPERTIES
    'required': {table: {disable: true}},
    '_required': {
      name: 'required',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>スライドボタンの選択を必須にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the selection of the slide toggle as required.</xy-sb-en>
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
                    <xy-sb-ja>スライドボタンの状態を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the state of the slide toggle.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'disabled': {table: {disable: true}},
    '_disabled': {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>スライドボタンを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the slide toggle.</xy-sb-en>
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
    //OUTPUT
    change: {
      description: `<xy-sb-description>
                    <xy-sb-ja>変更イベントハンドラ。<br/>パラメータクラス: \`MatSlideToggleChange\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Change event handler.<br/>Parameter Class: \`MatSlideToggleChange\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    click: {
      description: `<xy-sb-description>
                    <xy-sb-ja>クリックイベント。<br/>パラメータクラス: \`MouseEvent\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Click event handler.<br/>Parameter Class: \`MouseEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    toggleChange: {
      description: `<xy-sb-description>
                    <xy-sb-ja>トグル変更イベントハンドラ。<br/>パラメータクラス: \`MatSlideToggleChange\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Toggle change event handler.<br/>Parameter Class: \`MatSlideToggleChange\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    //METHODS
    ngOnInit: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    'onChange': {table: {disable: true}},
    'onClick': {table: {disable: true}},
    'onToggleChange': {table: {disable: true}},
    'onBlur': {table: {disable: true}},
    'onFocus': {table: {disable: true}},
    registerOnChange: {table: {disable: true}},
    registerOnTouched: {table: {disable: true}},
    setDisabledState: {table: {disable: true}},
    writeValue: {table: {disable: true}},
    //VIEW CHILD
    slideToggle: {table: {disable: true}},
    errors: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XySlideToggleModule, MatSlideToggleModule],
    }),
  ]
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<XySlideToggleComponent> = (args: XySlideToggleComponent) => ({
  props: args,
  template: `
      <xy-slide-toggle
        id="${args.id}"
        name="${args.name}"
       
        color="${args.color}"
     
       
        >
      ${args.label}
      </xy-slide-toggle>`,
});

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
export const Basic = Template.bind({});
Basic.args = {
};
