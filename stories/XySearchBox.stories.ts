// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {
  XyHintModule,
  XyInputModule,
  XySearchboxComponent,
  XySearchboxModule
} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'XYdesignsystem/XySearchbox',
  component: XySearchboxComponent,
  argTypes: {
    //PROPERTIES
    '_onChangeCallback': {table: {disable: true}},
    '_onTouchedCallback': {table: {disable: true}},
    //PROPERTIES
    'incremental-search': {table: {disable: true}},
    '_incrementalSearch': {
      name: 'incremental-search',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>インクリメンタルサーチ用にkeyupイベント毎にsearchイベントを発行します。</xy-sb-ja><br/>
                    <xy-sb-en>Issue a search event for each keyup event for incremental search.</xy-sb-en>
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
                    <xy-sb-ja>入力フィールドを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the input.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'searched': {table: {disable: true}},
    'hasError': {table: {disable: true}},
    // 'angularVersion': {table: {disable: true}},
    //INPUTS
    placeholder: {
      description: `<xy-sb-description>
                    <xy-sb-ja>プレースホルダを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the placeholder.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Search',
      type: {name: 'string'},
      table: {
        type: {summary: null},
      },
    },
    value: {
      description: `<xy-sb-description>
                    <xy-sb-ja>値を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the value.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: '',
      type: {name: 'string'},
      table: {
        type: {summary: null},
      },
    },
    // 'readonly': {table: {disable: true}},
    'errorStateMatcher': {table: {disable: true}},
    'formControl': {table: {disable: true}},
    //OUTPUTS
    'search': {
      description: `<xy-sb-description>
                    <xy-sb-ja>検索処理のファンクションを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the function of the search process.</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'reset': {
      description: `<xy-sb-description>
                    <xy-sb-ja>キーワードのリセット処理のファンクションを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the function of the reset process for the keyword.</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    //METHODS
    // ngOnInit: {table: {disable: true}},
    registerOnChange: {table: {disable: true}},
    registerOnTouched: {table: {disable: true}},
    writeValue: {table: {disable: true}},
    setDisabledState: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    // labelClass: {table: {disable: true}},
    // styleClass: {table: {disable: true}},
    //VIEW CHILD
    'hint': {table: {disable: true}},
    'errors': {table: {disable: true}},
    'input': {table: {disable: true}},
    // 'matLabel': {table: {disable: true}},
    'matLabel': {table: {disable: true}},
    'textInput': {table: {disable: true}},
    //METHOD
    'focus': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォーカスイベント。<br/>パラメータクラス: \`FocusEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Focus event.<br/>Parameter Class: \`FocusEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'blur': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォーカスアウトイベント。<br/>パラメータクラス: \`FocusEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Focus out event.<br/>Parameter Class: \`FocusEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'doReset': {table: {disable: true}},
    'doSearch': {table: {disable: true}},
    'onFocus': {table: {disable: true}},
    'onBlur': {table: {disable: true}},
    'onKeyUp': {table: {disable: true}},
    'onChange': {table: {disable: true}},
    'onClickClear': {table: {disable: true}},
    'onClickSearch': {table: {disable: true}},
    'updateErrorState': {table: {disable: true}},
    'styleClass': {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyInputModule, XySearchboxModule, XyHintModule, MatIconModule, BrowserAnimationsModule],
    }),
  ]
} as Meta;

const Template: Story<XySearchboxComponent> = (args: XySearchboxComponent) => ({
  props: args,
  template: `
      <xy-searchbox
      [disabled]="${args._disabled}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      incremental-search="${args._incrementalSearch}}"
    >
    </xy-searchbox>
  `
});

export const Basic = Template.bind({});
Basic.args = {
};

