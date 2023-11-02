// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {XyCheckboxModule, XyMenuComponent, XyMenuModule} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'XYdesignsystem/XyMenu',
  component: XyMenuComponent,
  argTypes: {
    name: {
      description: `<xy-sb-description>
                    <xy-sb-ja>名前を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the name.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'name',
      control: 'text',
      defaultValue: 'name1',
      type: {name: 'string', required: true},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    label: {
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューを開くボタンのラベルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the label of the button that opens the menu.</xy-sb-en>
                    </xy-sb-description>`,
      name: 'label',
      control: 'text',
      defaultValue: 'Menu',
      type: {name: 'string', required: true},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'visible-item': {table: {disable: true}},
    'visibleItem': {
      name: 'visible-item',
      control: 'number',
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューに表示する項目数を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the number of items to be displayed in the menu.</xy-sb-en>
                    </xy-sb-description>`,
      defaultValue: 0,
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    'checkable': {table: {disable: true}},
    '_checkable': {
      name: 'checkable',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューにチェックボックスを表示にします。</xy-sb-ja><br/>
                    <xy-sb-en>Show checkboxes in the menu.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'small': {table: {disable: true}},
    '_small': {
      name: 'small',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューのサイズを小さくします。チェックボックスとアイコンと同時に使用できません。</xy-sb-ja><br/>
                    <xy-sb-en>Reduce the size of the menu.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    'fit': {table: {disable: true}},
    '_fit': {
      name: 'fit',
      type: {name: 'boolean', required: false},
      defaultValue: false,
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューのサイズをコンテンツに合わせます。</xy-sb-ja><br/>
                    <xy-sb-en>Fit the size of menu to the content.</xy-sb-en>
                    </xy-sb-description>`,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    value: {table: {disable: true}},
    // 'value': {
    //   name: 'value',
    //   control: 'text',
    //   defaultValue: 'value',
    //   description: '値を指定します。',
    //   type: {name: 'string'},
    //   table: {
    //     type: {summary: null},
    //     defaultValue: {summary: null}
    //   },
    // },
    'disabled': {table: {disable: true}},
    '_disabled': {
      name: 'disabled',
      type: {name: 'boolean', required: false},
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューを無効にします。</xy-sb-ja><br/>
                    <xy-sb-en>Disable the menu.</xy-sb-en>
                    </xy-sb-description>`,
      defaultValue: false,
      table: {
        type: {summary: null},
        defaultValue: {summary: false},
      },
      control: {
        type: 'boolean'
      }
    },
    dataSource: {table: {disable: true}},
    xPosition: {
      description: `<xy-sb-description>
                    <xy-sb-ja>横方向のメニュー表示位置を設定します。</xy-sb-ja>
                    - <xy-sb-ja>\`before\` ボタン前方にメニューを表示します。</xy-sb-ja>
                    - <xy-sb-ja> \`after\` ボタン後方にメニューを表示します。</xy-sb-ja>
                    <br/>
                    <br/>

                    <xy-sb-en>Sets the x-position to display the menu.</xy-sb-en>
                    - <xy-sb-en>\`before\` Display a menu before the button.</xy-sb-en>
                    - <xy-sb-en>\`after\` Display a menu after the button.</xy-sb-en>
                    </xy-sb-description>`,
      options: [`before`, `after`],
      control: {
        type: 'select',
        labels: {
          'before': 'before',
          'after': 'after',
        },
      },
      defaultValue: 'after',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: null},
      },
    },
    yPosition: {
      description: `<xy-sb-description>
                    <xy-sb-ja>縦方向のメニュー表示位置を設定します。</xy-sb-ja>
                    - <xy-sb-ja>\`above\` ボタン上方にメニューを表示します。</xy-sb-ja>
                    - <xy-sb-ja> \`below\` ボタン下方にメニューを表示します。</xy-sb-ja>
                    <br/>
                    <br/>

                    <xy-sb-en>Sets the y-position to display the menu.</xy-sb-en>
                    - <xy-sb-en>\`above\` Display a menu above the button.</xy-sb-en>
                    - <xy-sb-en>\`below\` Display a menu below the button.</xy-sb-en>
                    </xy-sb-description>`,

      options: [`above`, `below`],
      control: {
        type: 'select',
        labels: {
          'above': 'above',
          'below': 'below',
        },
      },
      defaultValue: 'below',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: null},
      },
    },
    change: {
      description: `<xy-sb-description>
                  <xy-sb-ja>変更イベントハンドラ<br/>パラメータクラス: \`XyMenuChange\`</xy-sb-ja><br/><br/>
                  <xy-sb-en>Change event handler.<br/>Parameter Class: \`XyMenuChange\`</xy-sb-en>
                  </xy-sb-description>`,
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    formControl: {table: {disable: true}},
    formGroup: {table: {disable: true}},
    //METHOD
    isExpandable: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    ngOnInit: {table: {disable: true}},
    _onChangeCallback: {table: {disable: true}},
    _onTouchedCallback: {table: {disable: true}},
    _writeValue: {table: {disable: true}},
    checkedValues: {table: {disable: true}},
    onChange: {table: {disable: true}},
    writeValue: {table: {disable: true}},
    registerOnChange: {table: {disable: true}},
    registerOnTouched: {table: {disable: true}},
    //CONTENT CHILDREN
    menuItems: {table: {disable: true}},
    errors: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyMenuModule, XyCheckboxModule, MatIconModule, MatMenuModule, BrowserAnimationsModule],
    }),
  ],
} as Meta;

const Template: Story<XyMenuComponent> = (args: XyMenuComponent) => ({
  props: args,
  template: `
    <xy-menu name="${args.name}"
             label="${args.label}"
             [small]="${args._small}"
             [fit]="${args._fit}"
             [disabled]="${args._disabled}"
             visible-item="${args.visibleItem}"
             xPosition="${args.xPosition}"
             yPosition="${args.yPosition}">
      <xy-menu-item icon="settings">Menu 1 (With disabled)</xy-menu-item>
        <xy-menu-item [level]=2 disabled icon="settings">Menu 1-1</xy-menu-item>
        <xy-menu-item [level]=2 icon="settings">Menu 1-2</xy-menu-item>
        <xy-menu-item [level]=3 icon="settings">Menu 1-2-1</xy-menu-item>
        <xy-menu-item [level]=3 icon="settings">Menu 1-2-2</xy-menu-item>
        <xy-menu-item [level]=2 icon="settings">Menu 1-3</xy-menu-item>
        <xy-menu-item [level]=3 icon="settings">Menu 1-3-1</xy-menu-item>
        <xy-menu-item [level]=3 icon="settings">Menu 1-3-2</xy-menu-item>
        <xy-menu-item icon="settings">Menu 2</xy-menu-item>
        <xy-menu-item [level]=2 icon="settings">Menu 2-1</xy-menu-item>
        <xy-menu-item [level]=2 icon="settings">Menu 2-2</xy-menu-item>
        <xy-menu-item [level]=2 icon="settings">Menu 2-3</xy-menu-item>
        <xy-menu-item icon="settings">Menu 3 (No icon)</xy-menu-item>
        <xy-menu-item [level]=2>Menu 3-1</xy-menu-item>
        <xy-menu-item [level]=2>Menu 3-2</xy-menu-item>
        <xy-menu-item [level]=2>Menu 3-3</xy-menu-item>
        <xy-menu-item icon="settings">Menu 4</xy-menu-item>
        <xy-menu-item icon="settings">Menu 5</xy-menu-item>
        <xy-menu-item icon="settings">Menu 6</xy-menu-item>
    </xy-menu>
  `
});

export const Basic = Template.bind({});
Basic.args = {
};

