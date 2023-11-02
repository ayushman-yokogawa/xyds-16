import { FlatTreeControl } from '@angular/cdk/tree';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TreeControlService {
  public treeControl!: FlatTreeControl<any>;

  constructor() { }

  setTreeControl(treeControl: FlatTreeControl<any>) {
    this.treeControl = treeControl;
  }

  expandAll() {
    this.treeControl.expandAll();
  }

  collapseAll() {
    this.treeControl.collapseAll();
  }
}
