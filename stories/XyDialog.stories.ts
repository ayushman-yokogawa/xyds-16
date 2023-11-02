// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {XyDialogComponent, XyDialogModule, XyColumnModule, XyDialogActionsModule, XyButtonModule} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {Component} from "@angular/core";

export default {
  title: 'XYdesignsystem/XyDialog',
  argTypes: {
    title: {
      description: `<xy-sb-description>
                    <xy-sb-ja>タイトルを指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the title.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'text',
      defaultValue: 'Sample title.',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
      },
    },
    column: {
      description: `<xy-sb-description>
                    <xy-sb-ja>カラムを1～2で指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set the column as 1~2.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'number',
      defaultValue: 1,
      type: {name: 'number', required: false},
      table: {
        type: {summary: null},
      },
    },
    showClose: {
      description: `<xy-sb-description>
                    <xy-sb-ja>閉じるボタンを表示有無を指定します。</xy-sb-ja><br/>
                    <xy-sb-en>Set show the close button.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'boolean',
      defaultValue: false,
      type: {name: 'boolean', required: false},
      table: {
        type: {summary: null},
      },
    },
    myEvent: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `No Preview`
});

export const Basic = Template.bind({});
Basic.args = {};

