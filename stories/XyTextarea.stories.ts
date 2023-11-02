// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {
  XyHintModule,
  XyTextareaComponent,
  XyTextareaModule,
  XySearchboxModule
} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'XYdesignsystem/XyTextarea',
  component: XyTextareaComponent,
  argTypes: {
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
    note: {
      description: `<xy-sb-description>
                    <xy-sb-ja>説明を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the note.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Required / Only alphanumeric characters are allowed (A-Z, a-z, 0-9)',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
    //PROPERTIES
    'rows': {
      name: 'rows',
      description: `<xy-sb-description>
                    <xy-sb-ja>行数を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the rows.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'number',
      defaultValue: null,
      type: {name: 'number'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'maxlength': {
      name: 'maxlength',
      description: `<xy-sb-description>
                    <xy-sb-ja>最大文字数を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the maximum number of characters.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'number',
      defaultValue: null,
      type: {name: 'number'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
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
    'readonly': {table: {disable: true}},
    '_readonly': {
      name: 'readonly',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>入力フィールドを編集不可にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the status to read-only.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'edited': {table: {disable: true}},
    '_edited': {
      name: 'edited',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>編集済み状態にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the status to edited.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'isLoading': {table: {disable: true}},
    'is-loading': {table: {disable: true}},
    '_isLoading': {
      name: 'is-loading',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>読み込み中の状態にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the status to loading.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'success': {table: {disable: true}},
    '_success': {
      name: 'success',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>入力フィールドに成功のアイコンを表示にします。</xy-sb-ja><br/>
                    <xy-sb-en>Display the success icon in the input field.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'hasError': {
      name: 'has-error',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>エラーが発生したときに設定されるboolean値です。<br/>内部的に使用されるパラメータのため開発者が設定することはできません。</xy-sb-ja><br/>
                    <xy-sb-en>The boolean value is set when an error occurs.<br/>This parameter is used internally and cannot be set by the developer.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'has-error': {table: {disable: true}},
    '_hasError': {table: {disable: true}},
    'angularVersion': {table: {disable: true}},
    //INPUTS
    label: {
      description: `<xy-sb-description>
                    <xy-sb-ja>ラベルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the label.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Label',
      type: {name: 'string'},
      table: {
        type: {summary: null},
      },
    },
    placeholder: {
      description: `<xy-sb-description>
                    <xy-sb-ja>プレースホルダを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the placeholder.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Input Text Fill Here',
      type: {name: 'string'},
      table: {
        type: {summary: null},
      },
    },
    'required': {table: {disable: true}},
    '_required': {
      name: 'required',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>入力を必須にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the input as required.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    '_value': {table: {disable: true}},
    value: {
      description: `<xy-sb-description>
                    <xy-sb-ja>値を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the value.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata',
      type: {name: 'string'},
      table: {
        type: {summary: null},
      },
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
    '_onChangeCallback': {table: {disable: true}},
    '_onTouchedCallback': {table: {disable: true}},
    'errorStateMatcher': {table: {disable: true}},
    //METHODS
    // ngOnInit: {table: {disable: true}},
    registerOnChange: {table: {disable: true}},
    registerOnTouched: {table: {disable: true}},
    writeValue: {table: {disable: true}},
    setDisabledState: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    labelClass: {table: {disable: true}},
    styleClass: {table: {disable: true}},
    //VIEW CHILD
    'hint': {table: {disable: true}},
    'errors': {table: {disable: true}},
    'input': {table: {disable: true}},
    'matLabel': {table: {disable: true}},
    'textarea': {table: {disable: true}},
    //METHOD
    'focus': {
      name: 'focus',
      description: `<xy-sb-description>
                    <xy-sb-ja>フォーカスイベント。<br/>パラメータクラス: \`FocusEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Focus event.<br/>Parameter Class: \`FocusEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'blur': {
      name: 'blur',
      description: `<xy-sb-description>
                    <xy-sb-ja>フォーカスアウトイベント。<br/>パラメータクラス: \`FocusEvent\`\</xy-sb-ja><br/><br/>
                    <xy-sb-en>Focus out event.<br/>Parameter Class: \`FocusEvent\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    'onFocus': {table: {disable: true}},
    'onBlur': {table: {disable: true}},
    'onChange': {table: {disable: true}},
    'updateErrorState': {table: {disable: true}},
    'checkError': {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyTextareaModule, XySearchboxModule, XyHintModule, MatIconModule, BrowserAnimationsModule],
    }),
  ]
} as Meta;

const Template: Story<XyTextareaComponent> = (args: XyTextareaComponent) => ({
  props: args,
  template: `
    <xy-textarea
      label="${args.label}"
      [disabled]="${args._disabled}"
      [required]="${args._required}"
      [edited]="${args._edited}"
      [is-loading]="${args._disabled}"
      [readonly]="${args._readonly}"
      [success]="${args._success}"
      placeholder="${args.placeholder}"
      value="${args.value}"
      rows="${args.rows}"
      maxlength="${args.maxlength}"
      note="${args.note}"
    >
    </xy-textarea>
  `
});

export const Basic = Template.bind({});
Basic.args = {
};
