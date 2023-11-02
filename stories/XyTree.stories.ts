// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import {
  XyTreeComponent,
  XyTreeModule,
  XyButtonModule,
  XyNode,
  XyFlatNode
} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNode} from "@angular/material/tree";
import {CdkTreeModule, FlatTreeControl} from "@angular/cdk/tree";
import {DragDropModule} from "@angular/cdk/drag-drop";

export default {
  title: 'XYdesignsystem/XyTree',
  component: XyTreeComponent,
  argTypes: {
    dataSourceData: {
      description: `<xy-sb-description>
                    <xy-sb-ja>ツリーのデータモデルを指定します。<br/>以下の構造の配列で指定します。<br/></xy-sb-ja><br/><br/>
                    <xy-sb-en>Set the data model for the tree.<br/>Set by an array of the following structure.</xy-sb-en>
                    </xy-sb-description>` +
        '<div><pre>{\n' +
        '  id: string, - 文字列\n' +
        '  name: string, - 名称\n' +
        '  expand: boolean, - 開閉状態\n' +
        '  icon: string, - アイコン\n' +
        '  action: Function, - クリックしたときに実行されるFunction\n' +
        '  clickRight: Function, - 右アイコンをクリックしたときに実行されるFunction\n' +
        '  rightIcon: string, - 右アイコン\n' +
        '  clickRight2: Function, - 2番目の右アイコンをクリックしたときに実行されるFunction\n' +
        '  rightIcon2: string, - 2番目の右アイコン\n' +
        '  children: [], - 子ノードの配列\n' +
        '}</pre></div>',　
      table: {type: {summary: null}, defaultValue: {summary: null},},
      control: {type: null}
    },
    draggable: {table: {disable: true}},
    _draggable: {
      name: 'draggable',
      description: `<xy-sb-description>
                    <xy-sb-ja>ノードをドラッグ可能にします。<br/>※storybook上ではツリーの開閉およびドラッグ＆ドロップは動作しません。</xy-sb-ja><br/><br/>
                    <xy-sb-en>Set nodes draggable.<br/>※Expand and collapse the tree and dragging do not work on the storybook.</xy-sb-en>
                    </xy-sb-description>`,
      defaultValue: false,
      control: {type: null},
      table: {
        type: {summary: null},
      },
    },
    dataSource: {table: {disable: true}},
    dragging: {table: {disable: true}},
    expandTimeout: {table: {disable: true}},
    hasChild: {table: {disable: true}},
    treeControl: {table: {disable: true}},
    treeFlattener: {table: {disable: true}},
    validateDrop: {table: {disable: true}},
    hasClickRight: {table: {disable: true}},
    hasClickRight2: {table: {disable: true}},
    icon: {table: {disable: true}},
    hasIcon: {table: {disable: true}},
    rightIcon: {table: {disable: true}},
    rightIcon2: {table: {disable: true}},
    hasRightIcon: {table: {disable: true}},
    hasRightIcon2: {table: {disable: true}},
    shouldValidate: {table: {disable: true}},
    visibleNodes: {table: {disable: true}},
    nodeToggle: {table: {disable: true}},
    _transformer: {table: {disable: true}},
    //METHOD
    cloneData: {table: {disable: true}},
    doAction: {table: {disable: true}},
    findNode: {table: {disable: true}},
    dragStart: {table: {disable: true}},
    dragEnd: {table: {disable: true}},
    dragHover: {table: {disable: true}},
    dragHoverEnd: {table: {disable: true}},
    drop: {table: {disable: true}},
    focusNext: {table: {disable: true}},
    focusPrevious: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    ngOnInit: {table: {disable: true}},
    onClickItem: {table: {disable: true}},
    onClickRight: {table: {disable: true}},
    onClickRight2: {table: {disable: true}},
    onClickNode: {table: {disable: true}},
    onClickToggle: {table: {disable: true}},
    onKeyDown: {table: {disable: true}},
    rebuildTreeForData: {table: {disable: true}},
    onMouseDown: {table: {disable: true}},
    onMouseUp: {table: {disable: true}},
    styleClass: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyTreeModule, XyButtonModule, MatIconModule, MatTreeModule, CdkTreeModule, DragDropModule],
    }),
  ],
} as Meta;

const TREE_DATA = [
  {
    id: 'Fruit',
    name: 'Fruit',
    expand: true,
    icon: 'construction',
    clickRight: () => { alert('clickRight called'); },
    rightIcon: 'more_vert',
    children: [
      {
        id: 'Apple',
        name: 'Apple',
        icon: 'construction',
        action: () => { alert('action called'); },
        clickRight: () => { alert('clickRight called'); },
        rightIcon: 'more_vert',
        clickRight2: () => { alert('clickRight2 called'); },
        rightIcon2: 'more_vert',
      },
      {
        id: 'Banana',
        name: 'Banana'
      },
      {
        id: 'Fruit loops',
        name: 'Fruit loops'
      }
    ],
  },
  {
    id: 'Vegetables',
    name: 'Vegetables',
    expand: true,
    children: [
      {
        id: 'Green',
        name: 'Green',
        children: [
          {
            id: 'Broccoli',
            name: 'Broccoli'
          },
          {
            id: 'Brussels sprouts',
            name: 'Brussels sprouts'
          }
        ],
      },
      {
        id: 'Orange',
        name: 'Orange',
        children: [
          {
            id: 'Pumpkins',
            name: 'Pumpkins'
          },
          {
            id: 'Carrots',
            name: 'Carrots'
          }],
      },
    ],
  },
];

const _transformer = (node: XyNode, level: number) => {
  return {
    id: node.id,
    name: node.name,
    expand: node.expand,
    icon: node.icon,
    action: node.action,
    clickRight: node.clickRight,
    rightIcon: node.rightIcon,
    clickRight2: node.clickRight2,
    rightIcon2: node.rightIcon2,
    level: level,
    expandable: !!node.children && node.children.length > 0,
    disableRipple: false
  };
};

const treeControl = new FlatTreeControl<XyFlatNode>(
  node => node.level,
  node => node.expandable,
);


const Template: Story<XyTreeComponent> = (args: XyTreeComponent) => ({
  props: args
});

export const Basic = Template.bind({});
Basic.args = {
  dataSourceData: TREE_DATA,
  treeControl: treeControl,
};

