// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XyAccordionComponent, XyExpensionPanelComponent, XyExpensionPanelModule } from 'projects/xy-designsystem/src/public-api';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
    title: 'XYdesignsystem/XyExpension Panel',
    component: XyExpensionPanelComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyExpensionPanelModule, MatIconModule , MatExpansionModule, BrowserAnimationsModule],
      }),
    ],
    argTypes: {
     
    }
}

const DefaultExpensionPanel: Story<XyExpensionPanelComponent> = (args: XyExpensionPanelComponent) => ({
  component: XyExpensionPanelComponent,
  props: args,
  template: `
  <xy-accordion>
    
        <xy-expension-panel
            title="Expension Title"
            subtitle="Summary of the Expension title"
            [noIcon]="false"
            >
            <p>This is the primary content of the panel.</p>
        </xy-expension-panel>
        <xy-expension-panel
            title="Expension Title"
            subtitle="Summary of the Expension title"
            [noIcon]="false"
            [disabled]=true
        >
        <p>This is the primary content of the panel.</p>
        </xy-expension-panel>
        </xy-accordion>
   `,
});

const ExpendedState: Story<XyExpensionPanelComponent> = (args: XyExpensionPanelComponent) => ({
    component: XyExpensionPanelComponent,
    props: args,
    template: `
    <xy-accordion>
    
        <xy-expension-panel
            title="Expention Title"
            subtitle="Summary of the expention title"
            [noIcon]="false"
        >
            <p>This is the primary content of the panel.</p>
        </xy-expension-panel>

        <xy-expension-panel
        title="Expention Title"
        subtitle="Summary of the expention title"
        [noIcon]="false"
        >
            <p>This is the primary content of the panel.</p>
        </xy-expension-panel>
    </xy-accordion>
  
     `,
  });


//   const NoIcon: Story<XyExpensionPanelComponent> = (args: XyExpensionPanelComponent) => ({
//     component: XyExpensionPanelComponent,
//     props: args,
//     template: `
//     <xy-accordion>
//         <xy-expension-panel
//             title="Expention Title"
//             subtitle="Summary of the expention title"
//             [noIcon]="true"
//             >
//             <p>Lorem Ipsum is not a close derive for all elements</p>
//         </xy-expension-panel>
//     </xy-accordion>
  
//      `,
//   });

export const Default = DefaultExpensionPanel.bind({});
Default.args = { 

};
export const Multiple = ExpendedState.bind({});
Multiple.args = { 

};
// export const WithoutIcon = NoIcon.bind({});
// WithoutIcon.args = { 

// };







