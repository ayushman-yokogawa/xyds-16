import { EventEmitter, OnInit } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatLegacyCheckboxChange as MatCheckboxChange } from "@angular/material/legacy-checkbox";
import { TreeControlService } from "./tree-control.service";
import * as i0 from "@angular/core";
export interface XyNode {
    id: string;
    name: string;
    expand?: any;
    icon?: string;
    action?: Function;
    clickRight?: Function;
    rightIcon?: string;
    clickRight2?: Function;
    rightIcon2?: string;
    className?: string;
    children?: XyNode[];
    tooltip?: boolean;
    charLimit?: number;
}
export interface XyFlatNode {
    id: string;
    name: string;
    expand: any | undefined;
    icon: string | undefined;
    action: Function | undefined;
    clickRight: Function | undefined;
    rightIcon: string | undefined;
    clickRight2: Function | undefined;
    rightIcon2: string | undefined;
    level: number;
    expandable: boolean;
    className: string | undefined;
    disableRipple: boolean;
    tooltip: boolean | undefined;
    charLimit: number | undefined;
}
export declare class XyTreeComponent implements OnInit {
    private treeService;
    treeHead: boolean;
    treeFlattener: MatTreeFlattener<XyNode, XyFlatNode>;
    dataSource: MatTreeFlatDataSource<XyNode, XyFlatNode>;
    treeControls: boolean;
    _draggable: boolean;
    dragging: boolean;
    expandTimeout: any;
    validateDrop: boolean;
    expandCollapseButtonText: string;
    isExpanded: boolean;
    toggleExpandCollapse(): void;
    constructor(treeService: TreeControlService);
    expandAll(): void;
    collapseAll(): void;
    set draggable(b: "true" | "false" | "");
    set dataSourceData(list: Array<any>);
    expandState: boolean;
    ngOnInit(): void;
    _transformer: (node: XyNode, level: number) => {
        id: string;
        name: string;
        expand: any;
        icon: string | undefined;
        tooltip: boolean | undefined;
        charLimit: number | undefined;
        action: Function | undefined;
        clickRight: Function | undefined;
        rightIcon: string | undefined;
        clickRight2: Function | undefined;
        rightIcon2: string | undefined;
        className: string | undefined;
        level: number;
        expandable: boolean;
        disableRipple: boolean;
    };
    treeControl: FlatTreeControl<XyFlatNode, XyFlatNode>;
    hasChild: (_: number, node: XyFlatNode) => boolean;
    flatTreeEvent: EventEmitter<any>;
    clickNode($event: MouseEvent, node: any): void;
    onClickToggle(node: any): void;
    onClickNode($event: MouseEvent, node: any): void;
    doAction(node: any): void;
    hasIcon(node: any): boolean;
    icon(node: any): string | null;
    hasClickRight(node: any): boolean;
    onMouseDown($event: MouseEvent, node: any): void;
    onMouseUp($event: MouseEvent, node: any): void;
    onClickRight($event: MouseEvent, node: any): void;
    hasClickRight2(node: any): boolean;
    onClickRight2($event: MouseEvent, node: any): void;
    hasRightIcon(node: any): boolean;
    rightIcon(node: any): string | null;
    hasRightIcon2(node: any): boolean;
    rightIcon2(node: any): string | null;
    shouldValidate(event: MatCheckboxChange): void;
    /**
     * get current visible nodes
     */
    visibleNodes(): XyNode[];
    findNode(parent: XyNode | null, data: Array<XyNode>, node: XyNode): any;
    cloneData(datas: Array<any>): Array<any>;
    drop(event: CdkDragDrop<string[]>): void;
    dragStart(): void;
    dragEnd(): void;
    dragHover(node: XyFlatNode): void;
    dragHoverEnd(): void;
    rebuildTreeForData(data: Array<XyNode>): void;
    nodeToggle(node: XyFlatNode): void;
    onKeyDown(event: KeyboardEvent, node: XyFlatNode): void;
    focusPrevious(target: HTMLElement): void;
    focusNext(target: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<XyTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<XyTreeComponent, "xy-tree", never, { "treeControls": { "alias": "treeControls"; "required": false; }; "draggable": { "alias": "draggable"; "required": false; }; "dataSourceData": { "alias": "dataSourceData"; "required": false; }; "expandState": { "alias": "expandState"; "required": false; }; }, { "flatTreeEvent": "flatTreeEvent"; }, never, never, false, never>;
}
