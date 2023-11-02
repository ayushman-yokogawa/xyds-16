import { Component, EventEmitter, Input, Output } from '@angular/core';
import { XyNode } from '../../xy-tree/xy-tree.component';


@Component({
  selector: 'xy-sidebar-item',
  templateUrl: './sys-sidebar-item.component.html',
  styleUrls: ['./sys-sidebar-item.component.scss']
})
export class SysSidebarItemComponent {
  @Input() icon!: string;
  @Input() customIcon!: string;
  @Input() label!: string;
  @Input() routerLink!: string;
  @Input() charLimit!: number;
  @Input() className!: string;
  @Input() menuIcon!: string;
  @Input() tree!: boolean;
  @Input() logo!: boolean;
  @Input() menuTooltip!: boolean;
  @Input() treeMenu!: XyNode[];
  newLabelClass: any
  ngAfterViewInit(){
  }
  nodeClick($event: MouseEvent, node: any){
    node.action.call(this)
  }
  @Input() nodes!: XyNode[];
  @Input() defaultIcon : string = "chevron_right";
  @Input() expendedIcon : string = "expand_more";

  @Output() clickMenuNode = new EventEmitter();
  toggleNode(node: XyNode) {
    // node.expanded = !node.expanded;
  }


  onClickNode($event : MouseEvent, node : any){
    node.action.call(this);
  }

}
