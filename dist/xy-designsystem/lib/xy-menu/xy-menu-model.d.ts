import { EventEmitter } from '@angular/core';
import { XyMenuComponent } from "./xy-menu.component";
export interface XyMenuItem {
    id: string;
    icon?: string;
    value?: string;
    level?: number;
    disabled: boolean;
    click?: EventEmitter<MouseEvent>;
    content: any;
    checked: boolean;
    children: XyMenuItem[];
}
export declare class XyMenuChange {
    source: XyMenuComponent;
    value: Array<any>;
}
