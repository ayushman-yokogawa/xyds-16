// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {
  XyButtonModule,
  XyMenuModule,
  XySidenavComponent,
  XySidenavModule,
  XySpacerModule,
  XyTopAppBarModule,
} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";

export default {
  title: 'XYdesignsystem/XySidenav',
  component: XySidenavComponent,
  argTypes: {
    draggable: {
      description: `<xy-sb-description>
                    <xy-sb-ja>メニューをドラッグ可能にします。</xy-sb-ja><br/>
                    <xy-sb-en>Set the menu as draggable.</xy-sb-en>
                    </xy-sb-description>`,
      control: 'boolean',
      defaultValue: false,
      type: {name: 'boolean'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    class: {
      description: `Customize The Side nav Item with custom class`,
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    items: {table: {disable: true}},
    links: {table: {disable: true}},
    dataSource: {table: {disable: true}},
    dataSourceData: {table: {disable: true}},
    hasClickRight: {table: {disable: true}},
    hasClickRight2: {table: {disable: true}},
    hasIcon: {table: {disable: true}},
    icon: {table: {disable: true}},
    //METHOD
    cloneData: {table: {disable: true}},
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
    onKeyDown: {table: {disable: true}},
    rebuildSidenavForData: {table: {disable: true}},
    styleClass: {table: {disable: true}},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        XyTopAppBarModule,
        XyMenuModule,
        XyButtonModule,
        XySidenavModule,
        XySpacerModule,
        MatIconModule,
        RouterTestingModule,
        BrowserAnimationsModule],
    }),
    componentWrapperDecorator((story) =>
      `<div style="height: 300px;">${story}</div>`
    )
  ],
} as Meta;

const Template: Story<XySidenavComponent> = (args: XySidenavComponent) => ({
  props: args,
  template: `
    <xy-topAppBar [linkToSidenav]="sidenav" title="Toolbar"></xy-topAppBar>
      <xy-sidenav-container #sidenav>
        <xy-sidenav [draggable]="true">
          <xy-sidenav-item icon="home" name="Home">Home</xy-sidenav-item>
          <xy-sidenav-item icon="home" name="Menu1">Menu 1</xy-sidenav-item>
          <xy-sidenav-item icon="home" name="Menu2">Menu 2</xy-sidenav-item>
        </xy-sidenav>
      <xy-sidenav-content>
      </xy-sidenav-content>
    </xy-sidenav-container>
`
});

export const Basic = Template.bind({});
Basic.args = {};


const Template2: Story<XySidenavComponent> = (args: XySidenavComponent) => ({
  props: args,
  template: `
  <xy-sidebar [small]="small" [fluid]="fluid" className="customSidebar" [fluid]="true"> 
    <xy-sidebar-item icon="home" label="Home" className="custom" [charLimit]="2"   (clickMenuNode)="test()" [tooltip]="'Home'" [tooltipClass]="'xy-tooltip-right'" placement="right"> </xy-sidebar-item>
    <xy-sidebar-item icon="settings" className="tree" [tree]="true">
      <xy-tree [dataSourceData]="TREE_DATA" draggable></xy-tree>
    </xy-sidebar-item>
  </xy-sidebar>
`
});

export const NestedSidenav = Template2.bind({});
Basic.args = {};

