import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TreeControlService {
    constructor() { }
    setTreeControl(treeControl) {
        this.treeControl = treeControl;
    }
    expandAll() {
        this.treeControl.expandAll();
    }
    collapseAll() {
        this.treeControl.collapseAll();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: TreeControlService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: TreeControlService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.1", ngImport: i0, type: TreeControlService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1jb250cm9sLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy94eS1kZXNpZ25zeXN0ZW0vc3JjL2xpYi94eS10cmVlL3RyZWUtY29udHJvbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxrQkFBa0I7SUFHN0IsZ0JBQWdCLENBQUM7SUFFakIsY0FBYyxDQUFDLFdBQWlDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQzs4R0FmVSxrQkFBa0I7a0hBQWxCLGtCQUFrQixjQUZqQixNQUFNOzsyRkFFUCxrQkFBa0I7a0JBSDlCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhdFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUNvbnRyb2xTZXJ2aWNlIHtcclxuICBwdWJsaWMgdHJlZUNvbnRyb2whOiBGbGF0VHJlZUNvbnRyb2w8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgc2V0VHJlZUNvbnRyb2wodHJlZUNvbnRyb2w6IEZsYXRUcmVlQ29udHJvbDxhbnk+KSB7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sID0gdHJlZUNvbnRyb2w7XHJcbiAgfVxyXG5cclxuICBleHBhbmRBbGwoKSB7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgY29sbGFwc2VBbGwoKSB7XHJcbiAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlQWxsKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==