// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {MatIconModule} from "@angular/material/icon";
import {
  XyErrorModule, XyHintModule,
  XyOptionComponent,
  XySelectComponent,
  XySelectModule,
} from "projects/xy-designsystem/src/public-api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormControl, Validators } from '@angular/forms';

export default {
  title: 'XYdesignsystem/XySelect',
  component: XySelectComponent,
  argTypes: {
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
    'required': { table: {disable: true}},
    '_required': {
      name: 'required',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>入力を必須にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the select as required.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'disabled': { table: {disable: true}},
    '_disabled': {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>ラジオボタンを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the select.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'shadow': { table: {disable: true}},
    '_shadow': { table: {disable: true}},
    'small': {table: {disable: true}},
    '_small': {
      name: 'small',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>入力フィールドのサイズを小さくします。</xy-sb-ja><br/>
                    <xy-sb-en>Reduce the size of the select.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'selectedValue': {table: {disable: true}},
    'value': {
      description: `<xy-sb-description>
                    <xy-sb-ja>値を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the value.</xy-sb-en>
                    </xy-sb-description>`,
      options: [`option1`, `option2`, `option3`, `option4`],
      control: {
        type: 'select',
      },
      defaultValue: 'option1',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: null,
      },
    },
    'id': {
      description: `<xy-sb-description>
                    <xy-sb-ja>値を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the ID.</xy-sb-en>
                    </xy-sb-description>`,
      control: {type: 'select'},
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: null,
      },
    },
    
    dataSource: {table: {disable: true}},
    dataSourceData: {table: {disable: true}},
    form: {table: {disable: true}},
    selectedValueString: {table: {disable: true}},
    _onChangeCallback: {table: {disable: true}},
    _onTouchedCallback: {table: {disable: true}},
    'formControlName': {
      description: `<xy-sb-description>
                    <xy-sb-ja>フォームコントロールを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the form control Name.</xy-sb-en>
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
                    <xy-sb-ja>変更イベントハンドラ<br/>パラメータクラス: \`MatOptionSelectionChange\`</xy-sb-ja><br/><br/>
                    <xy-sb-en>Change event handler.<br/>Parameter Class: \`MatOptionSelectionChange\`</xy-sb-en>
                    </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    //METHODS
    onChange: {table: {disable: true}},
    ngOnInit: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    ngAfterContentInit: {table: {disable: true}},
    rebuildForData: {table: {disable: true}},
    applyValue: {table: {disable: true}},
    styleClass: {table: {disable: true}},
    compare: {table: {disable: true}},
    registerOnChange: {table: {disable: true}},
    registerOnTouched: {table: {disable: true}},
    setDisabledState: {table: {disable: true}},
    writeValue: {table: {disable: true}},
    selectControl: new FormControl('', [Validators.required]),
    //VIEW CHILD
    select: {table: {disable: true}},
    selectElement: {table: {disable: true}},
    hint: {table: {disable: true}},
    errors: {table: {disable: true}},
    options: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XySelectModule, XyHintModule, XyErrorModule, BrowserAnimationsModule, MatIconModule],
    }),
  ]
} as Meta;

const Template: Story<XySelectComponent> = (args: XySelectComponent) => ({
  props: args,
  template: `
    <xy-select label="${args.label}"
        [disabled]="${args._disabled}"
        [small]="${args._small}"
        value="${args.value}"
     >
      <xy-option value="option1">All Notifications</xy-option>
      <xy-option value="option2" disabled>Battery Low (disabled)</xy-option>
      <xy-option value="option3">Signal Shift Detected</xy-option>
      <xy-option value="option4">Inactive</xy-option>
    </xy-select>
  `
});
const Template2: Story<XySelectComponent> = (args: XySelectComponent) => ({
  props: args,
  template: `
  <xy-select label="Dropdown List Name" [multiple]="true" [selectFormControl]="selectControl"  value="option3">
    <xy-option value="All Notifications">All Notifications</xy-option>
    <xy-option value="Battery Low">Battery Low (disabled)</xy-option>
    <xy-option value="Signal Shift Detected">Signal Shift Detected</xy-option>
    <xy-option value="Inactive">Inactive</xy-option>
  </xy-select>
  `
});

// const Template2: Story<XySelectComponent> = (args: XySelectComponent) => ({
//   props: args,
//   template: `
//     <xy-select label="${args.label}"
//       [disabled]="${args._disabled}"
//       [small]="${args._small}"
//       value="${args.value}"
//       [multiple]="true"
//       [selectFormControl]="selectControl"
//     >
//         <xy-option value="option1">All Notifications</xy-option>
//         <xy-option value="option2" disabled>Battery Low (disabled)</xy-option>
//         <xy-option value="option3">Signal Shift Detected</xy-option>
//         <xy-option value="option4">Inactive</xy-option>
//     </xy-select>
//   `
// });

export const Basic = Template.bind({});
Basic.args = {
  dataSourceData: [
    {
      icon: '',
      value: 'option1',
      disabled: false,
      id:"1",
      displayName: 'All Notifications',
    },
    {
      icon: '',
      value: 'option2',
      disabled: true,
      id:"2",
      displayName: 'option2',
    },
    {
      icon: '',
      value: 'option3',
      disabled: false,
      id:"3",
      displayName: 'option3',
    },
    {
      id:"4",
      displayName: 'option4',
      value: 'option4',
      icon: '',
      disabled: false,
    },
  ]
};
export const MultiSelect = Template2.bind({});
MultiSelect.args = {

}
