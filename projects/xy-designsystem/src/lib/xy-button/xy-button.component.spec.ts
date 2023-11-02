import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {XyButtonComponent} from './xy-button.component';
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {By} from "@angular/platform-browser";

describe('XyButtonComponent', () => {
  let component: XyButtonComponent;
  let fixture: ComponentFixture<XyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyButtonComponent ],
      imports: [
        MatButtonModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should button-type text-button', () => {
    component.buttonType = 'text-button';
    component.icon = 'home';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.getAttribute('mat-button')).toBe('');
  });

  it('should button-type light-weight-button', () => {
    component.buttonType = 'light-weight-button';
    component.icon = 'home';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.getAttribute('mat-stroked-button')).toBe('');
  });

  it('should button-type standard-button', () => {
    component.buttonType = 'standard-button';
    component.icon = 'home';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.getAttribute('mat-flat-button')).toBe('');
  });

  it('should button-type icon-button', () => {
    component.buttonType = 'icon-button';
    component.icon = 'home';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.getAttribute('mat-icon-button')).toBe('');
    let matIcon = fixture.debugElement.query(By.css('mat-icon'));
    expect(matIcon).toBeTruthy();
    let text = fixture.debugElement.query(By.css('.ng-star-inserted'));
    expect(text).not.toBeTruthy();
  });

  it('should color accent', () => {
    component.color = 'accent';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toHaveClass('mat-accent');
  });

  it('should color critical', () => {
    component.color = 'critical';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toHaveClass('mat-critical');
  });

  it('should color error', () => {
    component.color = 'error';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toHaveClass('mat-error');
  });

  it('should color warning', () => {
    component.color = 'warning';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toHaveClass('mat-warning');
  });

  it('should color attention', () => {
    component.color = 'attention';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toHaveClass('mat-attention');
  });

  it('should color safe&normal', () => {
    component.color = 'safe_normal';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button).toHaveClass('mat-safe_normal');
  });

  it('should disable', fakeAsync(() => {
    component.disabled = 'true';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.xy-button');
    expect(button.disabled).toBeTrue();
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = 'false';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.xy-button');
    expect(button.disabled).toBeFalse();
  }));

  it('should call onClick', fakeAsync(() => {
    spyOn(component, 'onClick');
    let button = fixture.debugElement.nativeElement.querySelector('.xy-button');
    button.click();
    tick();
    expect(component.onClick).toHaveBeenCalled();
  }));

  it('should focus', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('focus'));
    tick();
    expect(button).toHaveClass('cdk-focused');
  }));

  it('should call onFocus', fakeAsync(() => {
    spyOn(component, 'onFocus');
    let button = fixture.debugElement.nativeElement.querySelector('.xy-button');
    button.dispatchEvent(new CustomEvent('blur'));
    tick();
    button.dispatchEvent(new CustomEvent('focus'));
    tick();
    expect(component.onFocus).toHaveBeenCalled();
  }));

  it('should blur', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('blur'));
    tick();
    expect(button).not.toHaveClass('cdk-focused');
  }));

  it('should call onBlur', fakeAsync(() => {
    spyOn(component, 'onBlur');
    let button = fixture.debugElement.nativeElement.querySelector('.xy-button');
    button.dispatchEvent(new CustomEvent('focus'));
    tick();
    button.dispatchEvent(new CustomEvent('blur'));
    tick();
    expect(component.onBlur).toHaveBeenCalled();
  }));
});
