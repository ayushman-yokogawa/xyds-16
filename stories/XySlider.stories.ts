// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XySelectModule, XySliderComponent, XySliderModule } from 'projects/xy-designsystem/src/public-api';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

export default {
  title: 'XYdesignsystem/XySlider',
  component: XySliderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XySliderModule, MatSliderModule ],
    }),
  ],
  argTypes: {
    'color': {
        description: ``,
        options: [`accent`, `critical`, `error`, `warning`, `attention`],
        control: {
          labels: {
            'accent': 'Accent',
            'critical': 'Critical',
            'error': 'Error',
            'warning': 'Warning',
            'attention': 'Attention',
            'safe_normal': 'Safe&Normal',
          },
        },
        defaultValue: 'accent',
        type: {name: 'string', required: true},
        table: {
          type: {summary: null},
          defaultValue: {summary: 'accent'},
        },
      },

  }
} as Meta;


const TemplateBasicSlider: Story<XySliderComponent> = (args: XySliderComponent) => ({
    component: XySliderComponent,
    props: args,
    template: `
        <xy-slider 
            label="${args.label}" 
            color="${args.color}"
            min="${args.min}"
            max=${args.max}
            value=${args.value}
            [disabled]=${args.disabled}>
        </xy-slider>
    `,
});


export const BasicSlider = TemplateBasicSlider.bind({});
BasicSlider.args = { 
    label : "Xy Slider",
    color : "accent",
    min:"0",
    max:"100",
    value:"60",
    disabled:false
};





  