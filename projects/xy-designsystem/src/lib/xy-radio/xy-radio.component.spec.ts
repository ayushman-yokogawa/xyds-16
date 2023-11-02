import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {XyRadioComponent} from './xy-radio.component';
import {XyRadioGroupComponent} from "./xy-radio-group.component";
import {By} from "@angular/platform-browser";
import {MatLegacyCheckboxModule as MatCheckboxModule} from "@angular/material/legacy-checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";

describe('XyRadioComponent', () => {
  let component: XyRadioComponent;
  let fixture: ComponentFixture<XyRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyRadioComponent ],
      imports: [ MatRadioModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [{
        provide: XyRadioGroupComponent,
        useValue: {}
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should color accent', () => {
    component.color = 'accent';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    expect(button.getAttribute('ng-reflect-color')).toEqual('accent');
  });

  it('should color critical', () => {
    component.color = 'critical';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    expect(button.getAttribute('ng-reflect-color')).toEqual('critical');
  });

  it('should color error', () => {
    component.color = 'error';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    expect(button.getAttribute('ng-reflect-color')).toEqual('error');
  });

  it('should color warning', () => {
    component.color = 'warning';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    expect(button.getAttribute('ng-reflect-color')).toEqual('warning');
  });

  it('should color attention', () => {
    component.color = 'attention';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    expect(button.getAttribute('ng-reflect-color')).toEqual('attention');
  });

  it('should color safe&normal', () => {
    component.color = 'safe_normal';
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    expect(button.getAttribute('ng-reflect-color')).toEqual('safe_normal');
  });

  it('should disable', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.mat-radio-input'));
    expect(input.nativeElement.disabled).toBeTrue();
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = false;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.mat-radio-input'));
    expect(input.nativeElement.disabled).toBeFalse();
  }));

  it('should call onClick', fakeAsync(() => {
    spyOn(component, 'onClick');
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    button.click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
  }));

  it('should focus', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    button.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(button).toHaveClass('cdk-focused');
  }));

  it('should call onFocus', fakeAsync(() => {
    spyOn(component, 'onFocus');
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    button.dispatchEvent(new CustomEvent('focus'));
    fixture.detectChanges();
    expect(component.onFocus).toHaveBeenCalled();
  }));

  it('should blur', fakeAsync(() => {
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    button.dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    expect(button).not.toHaveClass('cdk-focused');
  }));

  it('should call onBlur', fakeAsync(() => {
    spyOn(component, 'onBlur');
    let button = fixture.debugElement.nativeElement.querySelector('.mat-radio-button');
    button.dispatchEvent(new CustomEvent('blur'));
    fixture.detectChanges();
    expect(component.onBlur).toHaveBeenCalled();
  }));
});
