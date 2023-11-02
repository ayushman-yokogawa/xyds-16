// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {componentWrapperDecorator, moduleMetadata} from "@storybook/angular";
import {
  XyButtonModule,
  XySidenavComponent,
  XySidenavModule,
  XySpacerModule,
  XyTopAppBarComponent,
  XyTopAppBarModule
} from "projects/xy-designsystem/src/public-api";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";

export default {
  title: 'XYdesignsystem/XyTopAppBar',
  component: XySidenavComponent,
  argTypes: {
    title: {
      description: ``,
      control: 'text',
      defaultValue: 'Title',
      type: {name: 'string'},
      table: {
        type: {summary: null},
        defaultValue: {summary: null}
      },
    },
    linkToSidenav: {
      description: ``,
      control: false,
    },
    collapsed: {
      description: ``,
      control: false,
    },
    'color': {
      description: ``,
      options: [`primary`, `accent`],
      control: {
        type: 'select',
        labels: {
          'accent': 'Accent',
          'primary': 'Primary',
        },
      },
      defaultValue: 'primary',
      type: {name: 'string', required: true},
      table: {
        type: {summary: null},
        defaultValue: {summary: 'primary'},
      },
    },
    sidenavOpened: {table: {disable: true}},
    ngAfterViewInit: {table: {disable: true}},
    ngOnInit: {table: {disable: true}},
    onClickSidenavButton: {table: {disable: true}},
    updateSidenav: {table: {disable: true}},
    items: {table: {disable: true}},
    links: {table: {disable: true}},
    dataSource: {table: {disable: true}},
    dataSourceData: {table: {disable: true}},
    hasClickRight: {table: {disable: true}},
    hasClickRight2: {table: {disable: true}},
    hasIcon: {table: {disable: true}},
    icon: {table: {disable: true}},
    draggable: {table: {disable: true}},
    //METHOD
    cloneData: {table: {disable: true}},
    dragStart: {table: {disable: true}},
    dragEnd: {table: {disable: true}},
    dragHover: {table: {disable: true}},
    dragHoverEnd: {table: {disable: true}},
    drop: {table: {disable: true}},
    focusNext: {table: {disable: true}},
    focusPrevious: {table: {disable: true}},
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

const Template: Story<XyTopAppBarComponent> = (args: XyTopAppBarComponent) => ({
  props: args,
  template: `
  <xy-topAppBar title="Sightseeings Spots"  [linkToSidenav]="sidenav3" [multiple]="true"></xy-topAppBar>

  <xy-sidenav-container #sidenav3 sticky collapse>
      <xy-sidenav [draggable]="true">
          <xy-button icon-button class="xy-sidenav-toolbox-item"><mat-icon>settings</mat-icon></xy-button>
          <xy-button icon-button class="xy-sidenav-toolbox-item"><mat-icon>settings</mat-icon></xy-button>
          <xy-button icon-button class="xy-sidenav-toolbox-item"><mat-icon>settings</mat-icon></xy-button>
          <xy-sidenav-item icon="crop_7_5" name="Button" routerLink="/button">Button</xy-sidenav-item>
          <xy-sidenav-item icon="view_column" name="Button Toggle" routerLink="/button_toggle">Button Toggle</xy-sidenav-item>
      </xy-sidenav>
  </xy-sidenav-container>
`
});
const WithoutSidenavTemplate: Story<XyTopAppBarComponent> = (args: XyTopAppBarComponent) => ({
  props: args,
  template: `
<xy-topAppBar title="${args.title}"></xy-topAppBar>
`
});

export const Basic = Template.bind({});
Basic.args = {};

export const WithoutSidenav = WithoutSidenavTemplate.bind({});
WithoutSidenav.args = {};

