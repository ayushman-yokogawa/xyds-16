// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XyAccordionComponent, XyAutocompleteComponent, XyAutocompleteModule, XyDatepickerModule, XyDividerComponent, XyDividerModule, XyExpensionPanelComponent, XyExpensionPanelModule, XyInputModule, XySearchboxModule } from 'projects/xy-designsystem/src/public-api';
import { MatAccordion } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
    title: 'XYdesignsystem/XyDivider',
    component: XyDividerComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyDividerModule, MatDatepickerModule],
      }),
    ],
    argTypes: {
    
      'placeholder': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en>
                      </xy-sb-en>
                      </xy-sb-description>`,
        name: 'title',
        control: 'text',
        type: {name: 'string'},
        table: {
          type: {summary: null},
          defaultValue: {summary: null}
      },
      },
    }
}




const InsetD: Story<XyDividerComponent> = (args: XyDividerComponent) => ({
  component: XyDividerComponent,
  props: args,
  template: `
    <div class="inset-devider">
        <xy-checkbox value="checkbox-accent" class="checkbox" color="accent" > SubTitle 1 </xy-checkbox> 
        <xy-divider [inset]="true"></xy-divider>
        <xy-checkbox value="checkbox-accent" class="checkbox" color="accent" > SubTitle 1 </xy-checkbox> 
    </div>
   `,
   
});

export const InsetDivider = InsetD.bind({});
InsetDivider.args = { 

};

const InsetF: Story<XyDividerComponent> = (args: XyDividerComponent) => ({
    component: XyDividerComponent,
    props: args,
    template: `
      <div class="inset-devider">
          <xy-checkbox value="checkbox-accent" class="checkbox" color="accent" > SubTitle 1 </xy-checkbox> 
          <xy-divider></xy-divider>
          <xy-checkbox value="checkbox-accent" class="checkbox" color="accent" > SubTitle 1 </xy-checkbox> 
      </div>
     `,
     
  });
  
  export const FullWidthDivider = InsetF.bind({});
  FullWidthDivider.args = { 
  
  };





