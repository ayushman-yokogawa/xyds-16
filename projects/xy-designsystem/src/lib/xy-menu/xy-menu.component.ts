import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {XyMenuItemComponent} from "./xy-menu-item.component";
import {LegacyMenuPositionX as MenuPositionX, LegacyMenuPositionY as MenuPositionY} from "@angular/material/legacy-menu";
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {MatLegacyMenu as MatMenu, MatLegacyMenuItem as MatMenuItem, MatLegacyMenuTrigger as MatMenuTrigger} from "@angular/material/legacy-menu";
import {XyCheckboxComponent} from "../xy-checkbox/xy-checkbox.component";
import {XyErrorComponent} from "../xy-error/xy-error.component";
import {XyMenuChange, XyMenuItem} from "./xy-menu-model";

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => XyMenuComponent),
  multi: true
};

@Component({
  selector: 'xy-menu',
  templateUrl: './xy-menu.component.html',
  styleUrls: ['./xy-menu.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class XyMenuComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input() name!: string;
  @Input() label!: string;
  @Input() icon!: string;
  @ViewChildren(MatMenu) matmenus!:QueryList<MatMenu>
  _small: boolean = false;
  @Input() isOverOpen: boolean = false;
  @Input() set small(s: boolean|string) {
    this._small = (s == true || s == 'true' || s == 'small' || s === '');
  }
  get small(): boolean {
    return this._small;
  }

    
  

  _fit: boolean = false;
  @Input() set fit(s: boolean|string) {
    this._fit = (s == true || s == 'true' || s == 'fit' || s === '');
  }
  get fit(): boolean {
    return this._fit;
  }

  _checkable: boolean = false;
  @Input() set checkable(s: boolean|string) {
    this._checkable = (s == true || s == 'true' || s == 'checkable' || s === '');
  }
  get checkable(): boolean {
    return this._checkable;
  }

  _required:boolean = false;
  @Input() set required(s: string|boolean) {
    this._required = (s == true || s == 'true' || s == 'required' || s === '');
  };
  get required(): boolean {
    return this._required;
  };

  _disabled: boolean = false;
  @Input() set disabled(s: boolean|string) {
    this._disabled = (s == true || s == 'true' || s == 'disabled' || s === '');
  }
  get disabled(): boolean {
    return this._disabled;
  }
  @Input('visible-item') visibleItem: number = 0;
  @Input() xPosition!: MenuPositionX;
  @Input() yPosition!: MenuPositionY;
  @Input() formGroup!: FormGroup;
  @Input() formControl!: FormControl;
  @ContentChildren(XyMenuItemComponent) menuItems!: QueryList<XyMenuItemComponent>;
  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;

  dataSource!: XyMenuItem;

  @Output() change:EventEmitter<XyMenuChange> = new EventEmitter<XyMenuChange>();

  private _onTouchedCallback: () => void = () => {};
  private _onChangeCallback: (_:any) => void = () => {};

  constructor() { }

  ngOnInit(): void {
    this.dataSource = {
      id: 'menu-' + this.name,
      value: '',
      level: 0,
      disabled: this._disabled,
      content: this.label,
      checked: false,
      children: []
    };
  }

  ngAfterViewInit(): void {
    let control: any;
    if (this.formGroup) {
      control = <FormControl>this.formGroup.get(this.name);
    } else if (this.formControl) {
      control = this.formControl;
    }
    if (control == null) {
      this.formControl = new FormControl('', []);
    }
    if (this.required) {
      this.formControl.addValidators(Validators.required);
    }

    const self = this;

    if (this.menuItems.length > 0) {
      let list: XyMenuItem[] = [];
      let path: XyMenuItem[] = [];
      let i = 0;
      for (const item of this.menuItems) {
        let level = item.level;
        let obj = {
          id: 'menu-' + this.name + '-' + (i++),
          icon: item.icon,
          value: item.value,
          level: item.level,
          disabled: item.disabled,
          click: item.click,
          content: item.content,
          checked: false,
          children: []
        }

        if (level != null && level > 1) {
          let i = (level - 2);
          let j = (level - 1);
          if (path.length > i && path[i] != null) {
            if (path[i].children == null) {
              path[i].children = [];
            }
            path[i].children.push(obj);
          }
          if (path.length > j) {
            path[j] = obj;
          } else {
            path.push(obj);
          }
        } else {
          list.push(obj);
          path = [obj];
        }
      }
      setTimeout(function () {
        self.dataSource.children = list;
      }, 200);
    }
  }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  value: any;

  writeValue(obj: any): void {
    this.value = obj;
    this._writeValue(this.dataSource, obj);
  }

  _writeValue(item:XyMenuItem, obj: any) {
    if (typeof obj != 'object' || obj.length == undefined) {
      return;
    }

    for (const child of item.children) {
      for (const o of obj) {
        if (o.value == child.value) {
          child.checked = true;
          if (o.children) {
            this._writeValue(child, o.children);
          }
        }
      }
    }
  }

  isExpandable(node: XyMenuItem) {
    return node.children && node.children.length > 0;
  }

  checkedValues(item: XyMenuItem): Array<any> {
    let val:Array<any> = [];
    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        let childVal = null;
        if (child.children && child.children.length > 0) {
          childVal = this.checkedValues(child);
        }
        if (child.checked && child.value != null) {
          val.push({
            value: child.value,
            children: childVal
          });
        }
      }
    }
    return val;
  }

  onChange() {
    if (this.dataSource) {
      const val = this.checkedValues(this.dataSource);
      if (this.formGroup) {
        const control:FormControl = <FormControl>this.formGroup.get(this.name);
        if (control) {
          control.setValue(val);
        }
      } else if (this.formControl) {
        this.formControl.setValue(val);
      }
      const $event: XyMenuChange = new XyMenuChange();
      $event.value = val;
      this.change.emit($event);
    }
  }
}

@Component({
  selector: 'xy-menu-node',
  templateUrl: './xy-menu-node.component.html',
  styleUrls: ['./xy-menu-node.component.scss']
})
export class XyMenuNodeComponent implements OnInit {

  _small: boolean = false;
  @Input() isOverOpen: boolean = false;
  @Input() icon!: string;
  @Input() set small(s: boolean|string) {
    this._small = (s == true || s == 'true' || s == 'small' || s === '');
  }

  openMyMenu() {
    this.trigger.toggleMenu();
  } 
  closeMyMenu() {
    this.trigger.closeMenu();
    console.log('close')
  } 
  get small(): boolean {
    return this._small;
  }
  _fit: boolean = false;
  @Input() set fit(s: boolean|string) {
    this._fit = (s == true || s == 'true' || s == 'fit' || s === '');
  }
  get fit(): boolean {
    return this._fit;
  }
  _checkable: boolean = false;
  @Input() set checkable(s: boolean|string) {
    this._checkable = (s == true || s == 'true' || s == 'checkable' || s === '');
  }
  get checkable(): boolean {
    return this._checkable;
  }
  _disabled: boolean = false;
  @Input() set disabled(s: boolean|string) {
    this._disabled = (s == true || s == 'true' || s == 'disabled' || s === '');
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() parent!: XyMenuNodeComponent;
  @Input() rootNode: boolean = false;
  @Input('is-last') _isLast: boolean = false;
  @Input() data!: XyMenuItem;

  @Input('visible-item') visibleItem: number = 0;
  @Input() xPosition!: MenuPositionX;
  @Input() yPosition!: MenuPositionY;

  @ViewChild(MatMenu) matMenu!: MatMenu;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @ViewChildren(XyMenuNodeComponent) children!: QueryList<XyMenuNodeComponent>;
  @ContentChildren(XyErrorComponent) errors!: QueryList<XyErrorComponent>;

  constructor(private menu: XyMenuComponent) { }

  ngOnInit(): void {
  }

  /**
   * Check if there is (a) child(children).
   */
  hasChildren(): boolean {
    return this.data.children != null && this.data.children.length > 0;
  }

  /**
   * Check the item is last item.
   */
  isLast(item: XyMenuItem) {
    return (this.data.children.indexOf(item) == this.data.children.length - 1);
  }

  menuStyle() {
    let styles = [];
    if (this._small) {
      styles.push('xy-menu-small');
    }
    if (this._fit) {
      styles.push('xy-menu-fit');
    }
    if (this.visibleItem) {
      styles.push('xy-menu-rows-' + this.visibleItem);
    }
    return styles.join(' ');
  }

  dividerStyle() {
    let styles = ['xy-menu-divider'];
    if (this._checkable) {
      styles.push('checkable');
    }
    return styles.join(' ');
  }

  onClick($event: MouseEvent) {
    if (this.data && this.data.click) {
      this.data.click.emit($event);
    }
  }

  onCloseMenu(node: MatMenuItem) {
    const element = node._getHostElement();
    setTimeout(() => {
      if (element) {
        element.classList.remove('mat-focus-indicator');
        element.classList.remove('cdk-focused');
        element.classList.remove('cdk-program-focused');
        element.classList.remove('cdk-mouse-focused');
        element.classList.remove('mat-menu-item-highlighted');
      }
    }, 0);
  }

  closeOther(except: XyMenuNodeComponent) {
    for (const child of this.children) {
      if (child != except) {
        if (child.trigger) {
          child.trigger.closeMenu();
        }
      }
    }
  }

  mouseEnter() {
    if (this.parent) {
      this.parent.closeOther(this);
    }
    if (this.trigger) {
      this.trigger.openMenu();
    }
  }

  onChangeCheckbox(checkbox: XyCheckboxComponent, item: XyMenuItem) {
    if (checkbox.checked) {
      this.checkChildren(item);
    } else {
      this.clearCheckChildren(item);
    }
    item.checked = checkbox.checked;
    if (this.parent) {
      this.parent.updateCheck();
    }
    if (this.menu) {
      this.menu.onChange();
    }
  }

  checkChildren(item: XyMenuItem) {
    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        if (!child.disabled) {
          child.checked = true;
          this.checkChildren(child);
        }
      }
    }
  }

  clearCheckChildren(item: XyMenuItem) {
    if (item.children && item.children.length > 0) {
      for (const child of item.children) {
        child.checked = false;
        this.clearCheckChildren(child);
      }
    }
  }

  updateCheck() {
    if (this.data) {
      let someChecked: boolean = false;
      let allClear: boolean = true;
      if (this.data.children && this.data.children.length > 0) {
        for (const child of this.data.children) {
          someChecked = someChecked || child.checked;
          allClear = allClear && !child.checked;
        }
      }
      if (someChecked) {
        this.data.checked = true;
      } else if (allClear) {
        this.data.checked = false;
      }
    }
  }
}
