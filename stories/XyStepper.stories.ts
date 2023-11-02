// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from "@storybook/angular";
import { XyButtonModule, XyStepComponent, XyStepModule, XyStepperComponent, XyStepperModule } from 'projects/xy-designsystem/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'XYdesignsystem/XyStepper',
  component: XyStepperComponent,
  argTypes: {
    
      control: {
        type: 'boolean'
      }
    },

  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [XyStepperModule,XyButtonModule, XyStepModule, BrowserAnimationsModule],
    }),
  ]
} as Meta;

const Template: Story<XyStepperComponent> = (args: XyStepperComponent) => ({
  props: args,
  template: `
  <xy-stepper #stepper [(counter)]="counter">
	<xy-step>
		<div step-title >Step 1</div>
		<div step-content>
            <h3>Content 1</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem aliquid expedita, iste aspernatur?
            </p>
        </div>
		<div step-action>
			<xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
		</div>
	</xy-step>
	<xy-step>
		<div step-title>Step 2</div>
		<div step-content>
            <h3>Content 2</h3>
            <p>
                consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem aliquid expedita, iste aspernatur? Itaque odit exercitationem aliquid expedita, iste aspernatur?
            </p>
        </div>
		<div step-action>
            <xy-button color="accent" (click)="stepper.prevStep()">Pre Steps</xy-button>
			<xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
		</div>
	</xy-step>
	<xy-step>
		<div step-title>Step 3</div>
		<div step-content> 
            <h3>Content 3</h3>
            <p>
                Itaque odit exercitationem aliquid expedita, iste aspernatur?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem
            </p>
        </div>
		<div step-action>
            <xy-button color="accent" (click)="stepper.prevStep()">Pre Steps</xy-button>
            &nbsp;
			<xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
        </div>
	</xy-step>
	<xy-step>
		<div step-title>Step 4</div>
		<div step-content> 
            <h3>Content 4</h3>
            <p>
                Itaque odit exercitationem aliquid expedita, iste aspernatur?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem
            </p>
        </div>
		<div step-action>
            <xy-button color="accent" (click)="stepper.prevStep()">Pre Steps</xy-button>
            &nbsp;
			<xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
        </div>
	</xy-step>
</xy-stepper>
`
});

const Template2: Story<XyStepperComponent> = (args: XyStepperComponent) => ({
    props: args,
    template: `
    <xy-stepper #stepper [(counter)]="counter" vertical>
      <xy-step>
          <div step-title >Step 1</div>
          <div step-content>
              <h3>Content 1</h3>
              <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem aliquid expedita, iste aspernatur?
              </p>
          </div>
          <div step-action>
              <xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
          </div>
      </xy-step>
      <xy-step>
          <div step-title>Step 2</div>
          <div step-content>
              <h3>Content 2</h3>
              <p>
                  consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem aliquid expedita, iste aspernatur? Itaque odit exercitationem aliquid expedita, iste aspernatur?
              </p>
          </div>
          <div step-action>
              <xy-button color="accent" (click)="stepper.prevStep()">Pre Steps</xy-button>
              <xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
          </div>
      </xy-step>
      <xy-step >
          <div step-title>Step 3</div>
          <div step-content> 
              <h3>Content 3</h3>
              <p>
                  Itaque odit exercitationem aliquid expedita, iste aspernatur?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem
              </p>
          </div>
          <div step-action>
              <xy-button color="accent" (click)="stepper.prevStep()">Pre Steps</xy-button>
              &nbsp;
              <xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
          </div>
      </xy-step>
      <xy-step>
          <div step-title>Step 4</div>
          <div step-content> 
              <h3>Content 4</h3>
              <p>
                  Itaque odit exercitationem aliquid expedita, iste aspernatur?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae maxime quasi, ut laudantium nihil praesentium fugit quas eum nemo quo modi aperiam. Itaque odit exercitationem
              </p>
          </div>
          <div step-action>
              <xy-button color="accent" (click)="stepper.prevStep()">Pre Steps</xy-button>
              &nbsp;
              <xy-button color="accent" (click)="stepper.nextStep()">Next Step</xy-button>
          </div>
      </xy-step>
  </xy-stepper>
  `
  });

export const BasicStepper = Template.bind({});
BasicStepper.args = {};


export const VerticalStepper = Template2.bind({});
VerticalStepper.args = {};

