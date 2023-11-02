import {AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild} from '@angular/core';
import {XySidenavItemComponent} from "./xy-sidenav-item.component";
import {CdkDragDrop} from "@angular/cdk/drag-drop";
import {XyOptionItem} from "../xy-select/xy-select.component";
import { MatSidenav } from '@angular/material/sidenav';

export interface XySideNaviItem {
  id: string;
  name?: string;
  icon?: string;
  action?: Function;
  clickRight?: Function;
  rightIcon?: string;
  clickRight2?: Function;
  rightIcon2?: string;
  routerLink?: string;
  dragging: boolean;
  class: string;
}

@Component({
  selector: 'xy-sidenav',
  templateUrl: './xy-sidenav.component.html',
  styleUrls: ['./xy-sidenav.component.scss']
})
export class XySidenavComponent implements OnInit, AfterViewInit {

  @Input() draggable: boolean = false;
  @Input() noCustomIcon!: boolean;
  @Input() nestedOn!: boolean;
  @Input() nestedItems!: any[];

  @ContentChildren(XySidenavItemComponent) items = new QueryList<XySidenavItemComponent>();
  @ContentChildren('a') links!: QueryList<any>;

  dataSourceData: XySideNaviItem[] = [];
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() set dataSource(list: XySideNaviItem[]) {
    this.dataSourceData = list;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.items.length > 0) {
      const self = this;
      let id = 0;
      let list: XySideNaviItem[] = [];
      for (const item of this.items) {
        list.push(
          {
            id: 'sidenavi-item-'+id++,
            name: item.name,
            icon: item.icon,
            rightIcon: item.rightIcon,
            rightIcon2: item.rightIcon2,
            clickRight: item.clickRight,
            clickRight2: item.clickRight2,
            routerLink: item.routerLink,
            dragging: false,
            class: item.class       
             }
        );
      }
      setTimeout(function () {
        self.dataSourceData = list;
      }, 200);
    }
  }

  onClickItem($event: MouseEvent, node:any) {
    if (node.action) {
      node.action.call(this);
    }
  }

  hasIcon(node:any): boolean {
    if (node.icon) {
      return true;
    }
    return false;
  }

  icon(node:any): string|null {
    if (node.icon) {
      return node.icon;
    }
    return null;
  }

  hasClickRight(node:any): boolean {
    if (node.clickRight) {
      return true;
    }
    return false;
  }

  onClickRight($event: MouseEvent, node:any) {
    $event.stopPropagation();
    if (node.clickRight) {
      node.clickRight.call(this);
    }
  }

  hasClickRight2(node:any): boolean {
    if (node.clickRight2) {
      return true;
    }
    return false;
  }

  onClickRight2($event: MouseEvent, node:any) {
    $event.stopPropagation();
    if (node.clickRight2) {
      node.clickRight2.call(this);
    }
  }

  cloneData(datas: Array<any>): Array<any> {
    let result = [];
    for (const data of datas) {
      result.push(Object.assign({}, data));
    }
    return result;
  }
  onClickClose($event: MouseEvent) {
    // snackBarRef.dismiss();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (!event.isPointerOverContainer) return;

    const clonedData = this.cloneData(this.dataSourceData);

    // drag source
    const nodeOfDrag = this.dataSourceData[event.previousIndex];

    // Remove drag node
    clonedData.splice(event.previousIndex, 1);

    // Add drag node to the new position
    clonedData.splice(event.currentIndex, 0, nodeOfDrag);

    this.rebuildSidenavForData(clonedData);
  }

  dragStart(node: XySideNaviItem) {
    node.dragging = true;
  }
  dragEnd(node: XySideNaviItem) {
    node.dragging = false;
  }
  dragHover(node: XySideNaviItem) {
  }
  dragHoverEnd(node: XySideNaviItem) {
  }

  /**
   * The following methods are for persisting the tree expand state
   * after being rebuilt
   */
  rebuildSidenavForData(data: XySideNaviItem[]) {
    this.dataSourceData = data;
  }

  /**
   * keydown event handler
   * @param event Key event
   * @param node tree node
   */
  onKeyDown(event: KeyboardEvent, node: XySideNaviItem) {
    const target = event.target as HTMLElement;
    switch (event.key) {
      case 'ArrowUp':
        this.focusPrevious(target);
        break;
      case 'ArrowDown':
        this.focusNext(target);
        break;
      case 'ArrowRight':
        this.focusNext(target);
        break;
      case 'ArrowLeft':
        this.focusPrevious(target);
        break;
      case 'Enter':
        target.click();
        break;
    }
  }

  /**
   * Focus previous node
   * @param target HTMLElement of mat-tree-node
   */
  focusPrevious(target: HTMLElement) {
    let previousSibling = target.previousSibling as HTMLElement;
    while (previousSibling != null && previousSibling.nodeName !== 'A') {
      previousSibling = previousSibling.previousSibling as HTMLElement;
    }
    if (previousSibling === null) {
      return;
    }
    previousSibling.focus();
  }

  /**
   * Focus next node
   * @param target HTMLElement of mat-tree-node
   */
  focusNext(target: HTMLElement) {
    let nextSibling = target.nextSibling as HTMLElement;
    while (nextSibling != null && nextSibling.nodeName !== 'A') {
      nextSibling = nextSibling.nextSibling as HTMLElement;
    }
    if (nextSibling === null) {
      return;
    }
    nextSibling.focus();
  }

  styleClass(node: XySideNaviItem) {
    if (node.dragging) {
      return 'xy-sidenavi-item-dragging';
    }
    return '';
  }
}
