import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'xy-sidenav-container',
  templateUrl: './xy-sidenav-container.component.html',
  styleUrls: ['./xy-sidenav-container.component.scss']
})
export class XySidenavContainerComponent implements OnInit, AfterViewInit {

  @Input() _sticky: boolean = false;
  @Input() _collapse: boolean = false;
  @Input() _smallMenu: boolean = false;
  @Input() closeByClick!: boolean;
  @Input() normalSideNav!: boolean;
  
  reason = '';
  opened: boolean = false;

  

  @ViewChild('sidenav') sidenav!: MatSidenav;
   
  customClass(){
    
    const custom = this.element.nativeElement.querySelector('.mat-sidenav');
    
    const content = this.element.nativeElement.querySelector('.mat-sidenav-content');
    if(window.innerWidth >= 768){
      custom.classList.add("xy-sidenav-small");
      custom.classList.remove("hide");
      content.style.marginLeft = "48px";
     
    }else{
      custom.classList.add("hide");
      content.style.marginLeft = "0px";
    }
  }

  closeSidenav(): void {
    this.sidenav.close();
  }
  constructor(private element: ElementRef) { }

  ngOnInit(): void { 
  }
  
  close(reason: string){
    this.reason = reason;
    
    
  }

  ngAfterViewInit(): void {
    const top = this.element.nativeElement.offsetTop;
    const container = this.element.nativeElement.querySelector('.mat-sidenav-container');
    if (container) {
      container.style.height = 'calc(100% - ' + top + 'px)';
    }

    this.opened = this.sidenav.opened;
  }

  @Input() set sticky(b: 'true' | 'false' | '') {
    this._sticky = (b == 'true') || (b == '');
  }; 
  @Input() set collapse(b: 'true' | 'false' | '') {
    this._collapse = (b == 'true') || (b == '');
  };
  @Input() set smallMenu(b: 'true' | 'false' | '') {
    this._smallMenu = (b == 'true') || (b == '');
  };

  show() {
    this.opened = true;
    this.sidenav.open();
    const custom = this.element.nativeElement.querySelector('.mat-sidenav');
    custom.classList.remove("hide");
    if (this._sticky || this._collapse || this._smallMenu) {
      this.doLayout();
    }
  }

  hide() {
    this.opened = false;
    if (!this._sticky || !this._collapse || this._smallMenu) {
      this.sidenav.close();
    } else {
      this.doLayout();
    }
  }

  doLayout() {
    const self = this;
    setTimeout(function () {
      const w = self.element.nativeElement.querySelector('.mat-sidenav').offsetWidth;
      self.element.nativeElement.querySelector('.mat-sidenav-content').style.marginLeft = w + 'px';
    }, 200);
  }


  styleClass() {
    if(!this._collapse){
      return ''
    }
    if (this._sticky && !this.opened) {
      return 'xy-sidenav'
    } 
    if (this._sticky && this._collapse && !this.opened) {
      return 'xy-sidenav-small'
    }
    return 'xy-sidenav-small';
  }
}
