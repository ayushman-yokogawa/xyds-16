// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XyAccordionComponent, XyAutocompleteComponent, XyAutocompleteModule, XyExpensionPanelComponent, XyExpensionPanelModule, XyInputModule, XySearchboxModule } from 'projects/xy-designsystem/src/public-api';
import { MatAccordion } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


export default {
    title: 'XYdesignsystem/XyAutoComplete',
    component: XyAutocompleteComponent,
    parameters: { controls: { sort: 'requiredFirst' } },
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [XyAutocompleteModule, MatIconModule, MatAutocompleteModule, XySearchboxModule, XyInputModule],
      }),
    ],
    argTypes: {
      'AutoCompleteLabel': {
        description: `<xy-sb-description>
                      <xy-sb-ja></xy-sb-ja><br/>
                      <xy-sb-en></xy-sb-en>
                      </xy-sb-description>`,
        control: 'text',
        defaultValue: 'Yokoagava',
        type: {name: 'string', required: false},
        table: {
          type: {summary: null},
        },
      },
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

const AutoCompleteSearch: Story<XyExpensionPanelComponent> = (args: XyExpensionPanelComponent) => ({
  component: XyExpensionPanelComponent,
  props: args,
  template: `
  <xy-autocomplete 
    formControlName="searchAutocompleteControl" 
    [options]="['New York', 'India']" 
    [placeholder]="'Search Users'"
    (selected)="handleSelectedValue($event)"
    [disabled]="false"
    [searchAutocomplete]="true">
  </xy-autocomplete>
   `,
   
});

export const searchField = AutoCompleteSearch.bind({});
searchField.args = { 

};
// [options]="['New York', 'India']"
const AutocompleteInput: Story<XyExpensionPanelComponent> = (args: XyExpensionPanelComponent) => ({
  component: XyExpensionPanelComponent,
  props: args,
  template: `
  <xy-autocomplete 
      formControlName="inputAutocompleteControl" 
      [options]="['New York', 'India']" 
      [placeholder]="'Search cites'"
      (selected)="handleSelectedValue($event)"
      [disabled]="false"
      [inputAutocomplete]="true">
  </xy-autocomplete>
   `,
   
});

export const inputField = AutocompleteInput.bind({});
inputField.args = { 

};



const InputAutocompleteDisabled: Story<XyExpensionPanelComponent> = (args: XyExpensionPanelComponent) => ({
  component: XyExpensionPanelComponent,
  props: args,
  template: `
  <xy-autocomplete 
        formControlName="searchAutocompleteDsabledControl" 
        [options]="countries" 
        [placeholder]="'Search Users'"
        (selected)="handleSelectedValue($event)"
        [disabled]="true"
        [searchAutocomplete]="true">
    </xy-autocomplete>
   `,
   
});
export const autoCompleteDisabled = InputAutocompleteDisabled.bind({});
searchField.args = { 

};