// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {XyBreadcrumbComponent, XyButtonComponent} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'XYdesignsystem/XyBreadcrumb',
  component: XyBreadcrumbComponent,
  decorators: [
    moduleMetadata({
      declarations: [XyBreadcrumbComponent],
    }),
  ],
  parameters: { controls: { sort: 'requiredFirst' } },
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  options: {
  },
  argTypes: {
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
 const Template: Story<XyBreadcrumbComponent> = (args) => ({
   props: args,
   template: `
   <xy-breadcrumb #parent>
     <span class="xy-breadcrumb" *ngFor="let route of parent.breadcrumbs">
         <a *ngIf="!route.terminal" href="" [routerLink]="[route.url]">{{ route.displayName }}</a>
         <a *ngIf="route.terminal">{{ route.displayName }}</a>
     </span>
 </xy-breadcrumb> `,
});
export const BreadCrumb = Template.bind({});
BreadCrumb.args = {};