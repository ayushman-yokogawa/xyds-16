// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {XyBottomSheetComponent, XyBreadcrumbComponent, XyButtonComponent} from "projects/xy-designsystem/src/public-api";
import {moduleMetadata} from "@storybook/angular";


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'XYdesignsystem/XyBottomSheet',
  component: XyBottomSheetComponent,
  decorators: [
    moduleMetadata({
      declarations: [XyBottomSheetComponent],
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
 const Template: Story<XyBottomSheetComponent> = (args) => ({
   props: args,
   template: `
   <xy-bottom-sheet title="Bottom Sheet">
        <div style="display:flex; gap: 0 20px; align-items: center;">
            <mat-icon>settings</mat-icon>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
        <xy-divider></xy-divider>
        <div style="display:flex; gap: 0 20px; align-items: center;">
            <mat-icon>settings</mat-icon>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
        <xy-divider></xy-divider>
        <div style="display:flex; gap: 0 20px; align-items: center;">
            <mat-icon>settings</mat-icon>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
        </div>
    </xy-bottom-sheet>`,
});
export const BottomSheet = Template.bind({});
BottomSheet.args = {};