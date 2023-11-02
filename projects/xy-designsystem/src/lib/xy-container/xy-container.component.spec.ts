import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { XyContainerComponent } from './xy-container.component';
import {By} from "@angular/platform-browser";

describe('XyContainerComponent', () => {
  let component: XyContainerComponent;
  let fixture: ComponentFixture<XyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direction horizontal', fakeAsync(() => {
    component.direction = 'horizontal';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-horizontal');
  }));

  it('should direction vertical', fakeAsync(() => {
    component.direction = 'vertical';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-vertical');
  }));

  it('should align left', fakeAsync(() => {
    component.align = 'left';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-left');
  }));

  it('should align right', fakeAsync(() => {
    component.align = 'right';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-right');
  }));

  it('should align center', fakeAsync(() => {
    component.align = 'center';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-center');
  }));

  it('should align justify', fakeAsync(() => {
    component.align = 'justify';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-justify');
  }));

  it('should vertical align top', fakeAsync(() => {
    component.valign = 'top';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-vertical-top');
  }));

  it('should vertical align right', fakeAsync(() => {
    component.valign = 'bottom';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-vertical-bottom');
  }));

  it('should vertical align middle', fakeAsync(() => {
    component.valign = 'middle';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-vertical-center');
  }));

  it('should vertical align justify', fakeAsync(() => {
    component.valign = 'justify';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-vertical-justify');
  }));

  it('should spacing xs', fakeAsync(() => {
    component.spacing = 'xs';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-xs');
  }));

  it('should spacing s', fakeAsync(() => {
    component.spacing = 's';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-s');
  }));

  it('should spacing m', fakeAsync(() => {
    component.spacing = 'm';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-m');
  }));

  it('should spacing l', fakeAsync(() => {
    component.spacing = 'l';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-l');
  }));

  it('should spacing xl', fakeAsync(() => {
    component.spacing = 'xl';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-xl');
  }));

  it('should spacing xxl', fakeAsync(() => {
    component.spacing = 'xxl';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-xxl');
  }));

  it('should spacing xxxl', fakeAsync(() => {
    component.spacing = 'xxxl';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-spacing-xxxl');
  }));

  it('should wrap', fakeAsync(() => {
    component.wrap = 'wrap';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-wrap');
  }));

  it('should nowrap', fakeAsync(() => {
    component.wrap = 'nowrap';
    fixture.detectChanges();
    let container = fixture.debugElement.query(By.css('.xy-container'));
    expect(container.nativeElement).toHaveClass('xy-nowrap');
  }));
});
