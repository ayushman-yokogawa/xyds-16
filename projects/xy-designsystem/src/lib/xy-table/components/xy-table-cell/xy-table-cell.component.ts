import { AfterViewInit,Component,ComponentFactoryResolver,Input,OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { XyTableColumnDef } from '../../interfaces/xy-table-column.interface';


@Component({
  selector: 'xy-table-cell',
  templateUrl: './xy-table-cell.component.html',
  styleUrls: ['./xy-table-cell.component.scss']
})
export class XyTableCellComponent implements AfterViewInit, OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  @Input() columnDef!: XyTableColumnDef;
  @Input() data: any;
  imageSrc!: SafeUrl;

  constructor(public componentFactoryResolver: ComponentFactoryResolver, private _sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    if (this.columnDef.cellDef.type === 'image' && this.data.icon) {
      this.imageSrc = this._sanitizer.bypassSecurityTrustResourceUrl(this.data.icon.fileUrl);
    }
  }

  ngAfterViewInit() {
    this.loadDynamicComponent();
  }
 
  get isRenderingXyComponent() {
    return this.columnDef.cellDef.type === 'component';
  }

  loadDynamicComponent() {
    if (!this.isRenderingXyComponent) {
      return;
    }

    const {
      type: componentType,
      inputs: inputsFn
    } = this.columnDef.cellDef.value;

    const componentFacotry = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );

    this.container.clear();
    const componentRef = this.container.createComponent<typeof componentType>(
      componentFacotry
    );

    const componentInputs = inputsFn(this.data);
    Object.keys(componentInputs).forEach(key => {
      componentRef.instance[key] = componentInputs[key];
    });
  }
}
