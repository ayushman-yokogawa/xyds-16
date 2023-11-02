import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatLegacyCheckboxChange as MatCheckboxChange } from "@angular/material/legacy-checkbox";
import { strict } from "assert";
import { TreeControlService } from "./tree-control.service";

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

@Component({
  selector: "xy-tree",
  template: `
    <div class="treeControl xy-sidenav-toolbox" *ngIf="treeControls">
      <xy-button text-button color="accent" class="xy-sidenav-toolbox-item" (click)="toggleExpandCollapse()">
        {{ expandCollapseButtonText }}
      </xy-button>
    </div>

    <ng-template #treeItem let-node>
      <div class="xy-tree-item-icon" [tabindex]="-1" *ngIf="hasIcon(node)">
        <mat-icon >{{icon(node)}}</mat-icon>
      </div>
      <div class="xy-tree-item-content" [ngClass]="node.className"  [matTooltip]="node.tooltip == true && node.name.length > node.charLimit ? node.name: null" (click)="clickNode($event, node)">{{node.name}}</div>
      <xy-button icon-button class="xy-tree-item-right-button" [tabindex]="-1" *ngIf="hasClickRight(node)" (click)="onClickRight($event, node)" (mousedown)="onMouseDown($event, node)" (mouseup)="onMouseUp($event, node)">
        <mat-icon class="mat-icon-rtl-mirror" *ngIf="hasRightIcon(node)">
          {{rightIcon(node)}}
        </mat-icon>
      </xy-button>
      <xy-button icon-button class="xy-tree-item-right-button" [tabindex]="-1" *ngIf="hasClickRight2(node)" (click)="onClickRight2($event, node)" (mousedown)="onMouseDown($event, node)" (mouseup)="onMouseUp($event, node)">
        <mat-icon class="mat-icon-rtl-mirror" *ngIf="hasRightIcon2(node)">
          {{node.rightIcon2}}
        </mat-icon>
      </xy-button>
    </ng-template>

    <ng-container *ngIf="_draggable; then draggableComp; else normal;"></ng-container>

    <ng-template #draggableComp>
      <mat-tree [dataSource]="dataSource" [treeControl]="treeControl" cdkDropList (cdkDropListDropped)="drop($event)">
        <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding mat-ripple [matRippleDisabled]="node.disableRipple" (click)="onClickNode($event, node)" tabindex="0" (keydown)="onKeyDown($event, node)" cdkDrag [cdkDragData]="node" (mouseenter)="dragHover(node)" (mouseleave)="dragHoverEnd()" (cdkDragStarted)="dragStart()" (cdkDragReleased)="dragEnd()">
          <ng-container *ngTemplateOutlet="treeItem; context:{$implicit:node}"></ng-container>
        </mat-tree-node>
        <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding mat-ripple  [matRippleDisabled]="node.disableRipple" (click)="onClickNode($event, node)" tabindex="0" (keydown)="onKeyDown($event, node)" cdkDrag [cdkDragData]="node" (mouseenter)="dragHover(node)" (mouseleave)="dragHoverEnd()" (cdkDragStarted)="dragStart()" (cdkDragReleased)="dragEnd()">
          <ng-container *ngTemplateOutlet="treeItem; context:{$implicit:node}"></ng-container>
          <button mat-icon-button matTreeNodeToggle [tabindex]="-1" (click)="onClickToggle(node)">
            <mat-icon class="mat-icon-rtl-mirror">
              {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
            </mat-icon>
          </button>
        </mat-tree-node>
      </mat-tree>
    </ng-template>

    <ng-template #normal>
      <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
        <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding mat-ripple  [matRippleDisabled]="node.disableRipple" (click)="onClickNode($event, node)" tabindex="0" (keydown)="onKeyDown($event, node)">
          <ng-container *ngTemplateOutlet="treeItem; context:{$implicit:node}"></ng-container>
        </mat-tree-node>
        <mat-tree-node *matTreeNodeDef="let node;when: hasChild" matTreeNodePadding mat-ripple  [matRippleDisabled]="node.disableRipple" (click)="onClickNode($event, node)" tabindex="0" (keydown)="onKeyDown($event, node)">
          <button mat-icon-button matTreeNodeToggle>
            <mat-icon class="mat-icon-rtl-mirror">
              {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}
            </mat-icon>
          </button>
          <ng-container *ngTemplateOutlet="treeItem; context:{$implicit:node}"></ng-container>
        </mat-tree-node>
      </mat-tree>
    </ng-template>

  `,
  styleUrls: ["./xy-tree.component.scss"],
})
export class XyTreeComponent implements OnInit {
  treeHead: boolean = true;
  treeFlattener: MatTreeFlattener<XyNode, XyFlatNode>;
  dataSource: MatTreeFlatDataSource<XyNode, XyFlatNode>;
  @Input() treeControls!: boolean;
  _draggable: boolean = false;

  dragging = false;
  expandTimeout: any;
  validateDrop = false;

  expandCollapseButtonText: string = "Expand All";
  isExpanded: boolean = false;

  toggleExpandCollapse(): void {
    this.isExpanded = !this.isExpanded;
    this.expandCollapseButtonText = this.isExpanded
      ? "Collapse All"
      : "Expand All";

    // Call the appropriate function based on the state
    if (this.isExpanded) {
      this.expandAll();
    } else {
      this.collapseAll();
    }
  }

  constructor(private treeService: TreeControlService) {
    this.treeFlattener = new MatTreeFlattener(
      this._transformer,
      (node) => node.level,
      (node) => node.expandable,
      (node) => node.children
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  expandAll() {
    this.treeControl.expandAll();
  }
  collapseAll() {
    this.treeControl.collapseAll();
  }

  @Input() set draggable(b: "true" | "false" | "") {
    this._draggable = b == "true" || b == "";
  }

  @Input() set dataSourceData(list: Array<any>) {
    this.rebuildTreeForData(list);
  }

  @Input() expandState!: boolean;
  ngOnInit(): void {
    this.treeService.setTreeControl(this.treeControl);
  }

  _transformer = (node: XyNode, level: number) => {
    return {
      id: node.id,
      name: node.name,
      expand: node.expand,
      icon: node.icon,
      tooltip: node.tooltip,
      charLimit: node.charLimit,
      action: node.action,
      clickRight: node.clickRight,
      rightIcon: node.rightIcon,
      clickRight2: node.clickRight2,
      rightIcon2: node.rightIcon2,
      className: node.className,
      level: level,
      expandable: !!node.children && node.children.length > 0,
      disableRipple: false,
    };
  };

  treeControl = new FlatTreeControl<XyFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  hasChild = (_: number, node: XyFlatNode) => node.expandable;

  @Output() flatTreeEvent = new EventEmitter();

  clickNode($event: MouseEvent, node: any) {
    node.action.call(this);
  }

  onClickToggle(node: any) {
    node.expand = this.treeControl.isExpanded(node);
    console.log(node.expand);
    let nodeInfo = this.findNode(null, this.dataSource.data, node);
    if (nodeInfo) {
      nodeInfo.node.expand = node.expand;
    }
  }

  onClickNode($event: MouseEvent, node: any) {
    this.doAction(node);
  }

  doAction(node: any) {
    if (node.action) {
      node.action.call(this);
    }
  }

  hasIcon(node: any): boolean {
    if (node.icon) {
      return true;
    }
    return false;
  }

  icon(node: any): string | null {
    if (node.icon) {
      return node.icon;
    }
    return null;
  }

  hasClickRight(node: any): boolean {
    if (node.clickRight) {
      return true;
    }
    return false;
  }

  onMouseDown($event: MouseEvent, node: any) {
    node.disableRipple = true;
  }

  onMouseUp($event: MouseEvent, node: any) {
    node.disableRipple = false;
  }

  onClickRight($event: MouseEvent, node: any) {
    $event.stopPropagation();
    if (node.clickRight) {
      node.clickRight.call(this);
    }
  }

  hasClickRight2(node: any): boolean {
    if (node.clickRight2) {
      return true;
    }
    return false;
  }

  onClickRight2($event: MouseEvent, node: any) {
    node.disableRipple = true;
    $event.stopPropagation();
    if (node.clickRight2) {
      node.clickRight2.call(this);
    }
  }

  hasRightIcon(node: any): boolean {
    if (node.rightIcon) {
      return true;
    }
    return false;
  }

  rightIcon(node: any): string | null {
    if (node.rightIcon) {
      return node.rightIcon;
    }
    return null;
  }

  hasRightIcon2(node: any): boolean {
    if (node.rightIcon2) {
      return true;
    }
    return false;
  }

  rightIcon2(node: any): string | null {
    if (node.rightIcon2) {
      return node.rightIcon2;
    }
    return null;
  }

  shouldValidate(event: MatCheckboxChange): void {
    this.validateDrop = event.checked;
  }

  /**
   * get current visible nodes
   */
  visibleNodes(): XyNode[] {
    const result: XyNode[] = [];

    const self = this;
    function addExpandedChildren(node: XyFlatNode) {
      result.push(node);
      if (self.treeControl.isExpanded(node)) {
        self.treeControl.getDescendants(node).map((child) => {
          if (child.level == node.level + 1) {
            addExpandedChildren(child);
          }
        });
      }
    }

    this.treeControl.dataNodes.forEach((node: XyFlatNode) => {
      if (node.level == 0) {
        addExpandedChildren(node);
      }
    });
    return result;
  }

  findNode(parent: XyNode | null, data: Array<XyNode>, node: XyNode) {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      if (item.id == node.id) {
        return {
          node: item,
          parent: parent,
          index: i,
        };
      } else if (item.children) {
        let found: any = this.findNode(item, item.children, node);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  cloneData(datas: Array<any>): Array<any> {
    let result = [];
    for (const data of datas) {
      result.push(Object.assign({}, data));
    }
    return result;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (!event.isPointerOverContainer) return;

    const visibleNodes = this.visibleNodes();

    const clonedData = this.cloneData(this.dataSource.data);

    const nodeOfDrag = visibleNodes[event.previousIndex];

    const nodeAtDest = visibleNodes[event.currentIndex];

    let srcInfo = this.findNode(null, clonedData, nodeOfDrag);
    let destInfo = this.findNode(null, clonedData, nodeAtDest);

    
    if (srcInfo.parent) {
      srcInfo.parent.children.splice(srcInfo.index, 1);
    } else {
      clonedData.splice(srcInfo.index, 1);
    }

    let newDestInfo = this.findNode(null, clonedData, nodeAtDest);

   
    if (srcInfo.parent == destInfo.parent) {
   
      if (newDestInfo.node.children && newDestInfo.node.expand) {
        newDestInfo.node.children.splice(0, 0, srcInfo.node);
      } else {
        if (srcInfo.index < destInfo.index) {
          if (newDestInfo.parent) {
            newDestInfo.parent.children.splice(
              newDestInfo.index + 1,
              0,
              srcInfo.node
            );
          } else {
            clonedData.splice(newDestInfo.index + 1, 0, srcInfo.node);
          }
        } else if (srcInfo.index > destInfo.index) {
          if (newDestInfo.parent) {
            newDestInfo.parent.children.splice(
              newDestInfo.index,
              0,
              srcInfo.node
            );
          } else {
            clonedData.splice(newDestInfo.index, 0, srcInfo.node);
          }
        } else {
          return;
        }
      }
    } else {
  
      if (event.previousIndex < event.currentIndex) {
        if (newDestInfo.node.children && newDestInfo.node.expand) {
          newDestInfo.node.children.splice(0, 0, srcInfo.node);
        } else {
          if (newDestInfo.parent) {
            newDestInfo.parent.children.splice(
              newDestInfo.index + 1,
              0,
              srcInfo.node
            );
          } else {
            clonedData.splice(newDestInfo.index + 1, 0, srcInfo.node);
          }
        }
      } else if (event.previousIndex > event.currentIndex) {
        if (newDestInfo.parent) {
          newDestInfo.parent.children.splice(
            newDestInfo.index,
            0,
            srcInfo.node
          );
        } else {
          clonedData.splice(newDestInfo.index, 0, srcInfo.node);
        }
      }
    }

    this.rebuildTreeForData(clonedData);
  }

  dragStart() {
    this.dragging = true;
  }
  dragEnd() {
    this.dragging = false;
  }
  dragHover(node: XyFlatNode) {
    if (this.dragging) {
      clearTimeout(this.expandTimeout);
      this.expandTimeout = setTimeout(() => {
        this.treeControl.expand(node);
      }, 1000);
    }
  }
  dragHoverEnd() {
    if (this.dragging) {
      clearTimeout(this.expandTimeout);
    }
  }


  rebuildTreeForData(data: Array<XyNode>) {
    this.dataSource.data = data;

    this.treeControl.dataNodes.forEach(
      (value: XyFlatNode, index: number, array: XyFlatNode[]) => {
        if (value.expand) {
          this.treeControl.expand(value);
        }
      }
    );
  }

  nodeToggle(node: XyFlatNode) {
    if (this.treeControl.isExpanded(node)) {
      this.treeControl.collapse(node);
    } else {
      this.treeControl.expand(node);
    }
    this.onClickToggle(node);
  }

  onKeyDown(event: KeyboardEvent, node: XyFlatNode) {
    const target = event.target as HTMLElement;
    switch (event.key) {
      case "ArrowUp":
        this.focusPrevious(target);
        break;
      case "ArrowDown":
        this.focusNext(target);
        break;
      case "ArrowRight":
        this.treeControl.isExpanded(node)
          ? this.focusNext(target)
          : this.treeControl.expand(node);
        break;
      case "ArrowLeft":
        this.treeControl.isExpanded(node)
          ? this.treeControl.collapse(node)
          : this.focusPrevious(target);
        break;
      case "Enter":
        if (node.expandable) {
          this.nodeToggle(node);
        }
        target.click();
        break;
    }
  }

  focusPrevious(target: HTMLElement) {
    let previousSibling = target.previousSibling as HTMLElement;
    while (
      previousSibling != null &&
      previousSibling.nodeName !== "MAT-TREE-NODE"
    ) {
      previousSibling = previousSibling.previousSibling as HTMLElement;
    }
    if (previousSibling === null) {
      return;
    }
    previousSibling.focus();
  }

  focusNext(target: HTMLElement) {
    let nextSibling = target.nextSibling as HTMLElement;
    while (nextSibling != null && nextSibling.nodeName !== "MAT-TREE-NODE") {
      nextSibling = nextSibling.nextSibling as HTMLElement;
    }
    if (nextSibling === null) {
      return;
    }
    nextSibling.focus();
  }
}
