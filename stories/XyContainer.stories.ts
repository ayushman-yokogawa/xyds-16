// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {XyCheckboxModule, XyContainerComponent, XyContainerModule, XyRadioModule} from "projects/xy-designsystem/src/public-api";
import {MatRadioModule} from "@angular/material/radio";

export default {
  title: 'XYdesignsystem/XyContainer',
  component: XyContainerComponent,
  argTypes: {
    'align': {
      description: `<xy-sb-description>
                    <xy-sb-ja>垂直にレイアウトしている場合に、水平方向の配置を指定します。
                    - \`center\` 中央寄せ
                    - \`left\` 左寄せ
                    - \`right\` 右寄せ
                    - \`justify\` 両端揃え</xy-sb-ja>
                    <xy-sb-en>Set the horizontal alignment when the contents lay out vertically.
                    - \`center\` Center
                    - \`left\` Left
                    - \`right\` Right
                    - \`justify\` Justify</xy-sb-en>
                    </xy-sb-description>`,
      options: [`center`, `left`, `right`, `justify`],
      control: {
        type: 'radio',
        labels: {
          'center': 'Center / 中央寄せ',
          'left': 'Left / 左寄せ',
          'right': 'Right / 右寄せ',
          'justify': 'Justify / 両端揃え',
        },
      },
      defaultValue: 'left',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'left'},
      },
    },
    'valign': {
      description: `<xy-sb-description>
                    <xy-sb-ja>水平にレイアウトしている場合に、垂直方向の配置を指定します。
                    - \`middle\` 中央揃え
                    - \`top\` 上端揃え
                    - \`bottom\` 下端揃え
                    - \`justify\` 均等配置</xy-sb-ja>
                    <xy-sb-en>Set the vertical alignment when the contents lay out horizontally.
                    - \`middle\` Middle
                    - \`top\` Top
                    - \`bottom\` Bottom
                    - \`justify\` Justify</xy-sb-en>
                    </xy-sb-description>`,
      options: [`middle`, `top`, `bottom`, `justify`],
      control: {
        type: 'radio',
        labels: {
          'middle': 'Middle / 中央揃え',
          'top': 'Top / 上端揃え',
          'bottom': 'Bottom / 下端揃え',
          'justify': 'Justify / 均等配置',
        },
      },
      defaultValue: 'top',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'top'},
      },
    },
    'direction': {
      description: `<xy-sb-description>
                    <xy-sb-ja>配置方向を指定します。

                    - \`vertical\` 垂直方向
                    - \`horizontal\` 水平方向</xy-sb-ja>
                    <xy-sb-en>Set the placement directiosn.
                    - \`vertical\` Vertical
                    - \`horizontal\` Horizontal</xy-sb-en>
                    </xy-sb-description>`,
      options: [`vertical`, `horizontal`],
      control: {
        type: 'radio',
        labels: {
          'vertical': 'Vertical / 垂直方向',
          'horizontal': 'Horizontal / 水平方向',
        },
      },
      defaultValue: 'horizontal',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'horizontal'},
      },
    },
    'spacing': {
      description: `<xy-sb-description>
                    <xy-sb-ja>間隔を指定します。</xy-sb-ja>
                    <xy-sb-en>Set the space.</xy-sb-en>
                    - \`xss\` XSS
                    - \`xs\` XS
                    - \`s\` S
                    - \`m\` M
                    - \`l\` L
                    - \`xl\` XL
                    - \`xxl\` XXL
                    - \`xxxl\` XXXL
                    </xy-sb-description>`,
      options: [`xss`, `xs`, `s`, `m`, `l`, `xl`, `xxl`, `xxxl`],
      control: {
        type: 'radio',
        labels: {
          'xss': 'XSS',
          'xs': 'XS',
          's': 'S',
          'm': 'M',
          'l': 'L',
          'xl': 'XL',
          'xxl': 'XXL',
          'xxxl': 'XXXL',
        },
      },
      defaultValue: 'm',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'm'},
      },
    },
    'wrap': {
      description: `<xy-sb-description>
                    <xy-sb-ja>折り返しを指定します。

                    - \`wrap\` 折り返す
                    - \`nowrap\` 折り返さない</xy-sb-ja>
                    <xy-sb-en>Set the warp.
                    - \`wrap\` Wrap
                    - \`nowrap\` No wrap</xy-sb-en>
                    </xy-sb-description>`,
      options: [`wrap`, `nowrap`],
      control: {
        type: 'radio',
        labels: {
          'wrap': 'Wrap / 折り返す',
          'nowrap': 'No wrap / 折り返さない',
        },
      },
      defaultValue: 'nowrap',
      type: {name: 'string', required: false},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'nowrap'},
      },
    },
    styleClass: {table: {disable: true}},
    //METHODS
    ngOnInit: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    //VIEW CHILD
    'tabs': {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyContainerModule, XyRadioModule, XyCheckboxModule, MatRadioModule],
    }),
  ]
} as Meta;

const Template: Story<XyContainerComponent> = (args: XyContainerComponent) => ({
  props: args,
  template: `
      <xy-container direction="${args.direction}" align="${args.align}"  valign="${args.valign}"
                     spacing="${args.spacing}" wrap="${args.wrap}">
        <mat-radio-group name="group-container">
        <xy-checkbox id="ycb1" value="1" color="accent">Item 1</xy-checkbox>
        <xy-checkbox id="ycb2" value="2" color="accent">Item 2</xy-checkbox>
        <xy-checkbox id="ycb3" value="3" color="accent">Item 3</xy-checkbox>
        <xy-checkbox id="ycb4" value="4" color="accent">Item 4</xy-checkbox>
        <xy-checkbox id="ycb5" value="5" color="accent">Item 5</xy-checkbox>
        </mat-radio-group>
      </xy-container>
`
});

export const Basic = Template.bind({});
Basic.args = {};

