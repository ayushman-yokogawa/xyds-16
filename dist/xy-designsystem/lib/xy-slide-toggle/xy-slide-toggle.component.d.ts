import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormControl } from "@angular/forms";
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
export declare class XySlideToggleComponent implements ControlValueAccessor {
    color: any | 'accent' | 'critical' | 'error' | 'warning' | 'attention' | 'safe_normal';
    label: string;
    disabled: boolean;
    checked: boolean;
    name: string;
    id: string;
    change: EventEmitter<boolean>;
    error: string;
    control: FormControl;
    checkedChange: EventEmitter<boolean>;
    toggleChecked(event: MatSlideToggleChange): void;
    private onChange;
    private onTouched;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XySlideToggleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XySlideToggleComponent, "xy-slide-toggle", never, { "color": { "alias": "color"; "required": false; }; "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "name": { "alias": "name"; "required": false; }; "id": { "alias": "id"; "required": false; }; "error": { "alias": "error"; "required": false; }; }, { "change": "change"; "checkedChange": "checkedChange"; }, never, never, false, never>;
}
