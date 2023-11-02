import { EventEmitter, QueryList } from "@angular/core";
import { XyStepComponent } from "./xy-step/xy-step.component";
import * as i0 from "@angular/core";
export declare class XyStepperComponent {
    private currentStep;
    private internalSteps;
    counter: number;
    counterChange: EventEmitter<number>;
    ngOnChanges(): void;
    set stepsContent(steps: QueryList<XyStepComponent>);
    nextStep(): void;
    prevStep(): void;
    setStep(step: number | undefined): void;
    private registerSteps;
    _vertical: boolean;
    private setChildSteps;
    set vertical(b: "true" | "false" | "");
    styleClass(): "" | "vertical-stepper";
    static ɵfac: i0.ɵɵFactoryDeclaration<XyStepperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyStepperComponent, "xy-stepper", never, { "counter": { "alias": "counter"; "required": false; }; "_vertical": { "alias": "_vertical"; "required": false; }; "vertical": { "alias": "vertical"; "required": false; }; }, { "counterChange": "counterChange"; }, ["stepsContent"], ["*"], false, never>;
}
