import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { XySlideToggleComponent } from './xy-slide-toggle.component';
import {By} from "@angular/platform-browser";
import {MatLegacySlideToggleModule as MatSlideToggleModule} from "@angular/material/legacy-slide-toggle";

describe('XySlideToggleComponent', () => {
  let component: XySlideToggleComponent;
  let fixture: ComponentFixture<XySlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySlideToggleComponent ],
      imports: [ MatSlideToggleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should color accent', () => {
    component.color = 'accent';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    expect(button).toHaveClass('mat-accent');
  });

  it('should color critical', () => {
    component.color = 'critical';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    expect(button).toHaveClass('mat-critical');
  });

  it('should color error', () => {
    component.color = 'error';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    expect(button).toHaveClass('mat-error');
  });

  it('should color warning', () => {
    component.color = 'warning';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    expect(button).toHaveClass('mat-warning');
  });

  it('should color attention', () => {
    component.color = 'attention';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    expect(button).toHaveClass('mat-attention');
  });

  it('should color safe&normal', () => {
    component.color = 'safe_normal';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    expect(button).toHaveClass('mat-safe_normal');
  });

  it('should disable', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.mat-slide-toggle-input'));
    expect(input.nativeElement.disabled).toBeTrue();
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = false;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.mat-slide-toggle-input'));
    expect(input.nativeElement.disabled).toBeFalse();
  }));

  it('should call onClick', fakeAsync(() => {
    spyOn(component, 'onClick');
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    button.click();
    tick();
    expect(component.onClick).toHaveBeenCalled();
  }));

  it('should focus', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    button.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(button).toHaveClass('cdk-focused');
  }));

  it('should call onFocus', fakeAsync(() => {
    spyOn(component, 'onFocus');
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    button.dispatchEvent(new CustomEvent('focus'));
    fixture.detectChanges();
    expect(component.onFocus).toHaveBeenCalled();
  }));

  it('should blur', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    button.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(button).not.toHaveClass('cdk-focused');
  }));

  it('should call onBlur', fakeAsync(() => {
    spyOn(component, 'onBlur');
    let button = fixture.debugElement.nativeElement.querySelector('.mat-slide-toggle');
    button.dispatchEvent(new CustomEvent('blur'));
    fixture.detectChanges();
    expect(component.onBlur).toHaveBeenCalled();
  }));
});
