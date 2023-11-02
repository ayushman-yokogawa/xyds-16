import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {XyTextareaComponent} from './xy-textarea.component';
import {By} from "@angular/platform-browser";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('XyTextareaComponent', () => {
  let component: XyTextareaComponent;
  let fixture: ComponentFixture<XyTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTextareaComponent ],
      imports: [ MatInputModule, MatIconModule, ReactiveFormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-textarea'));
    expect(input.nativeElement.disabled).toBeTrue();
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = false;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-textarea'));
    expect(input.nativeElement.disabled).toBeFalse();
  }));

  it('should required', fakeAsync(() => {
    component.required = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-textarea'));
    expect(input.nativeElement.required).toBeTrue();
  }));

  it('should readonly', fakeAsync(() => {
    component.readonly = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-textarea'));
    expect(input.nativeElement.readonly).toBeTrue();
  }));

  it('should hasError', fakeAsync(() => {
    component.hasError = true;
    fixture.detectChanges();
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    expect(field.nativeElement).toHaveClass('xy-textarea-error');
    let icon = fixture.debugElement.query(By.css('.xy-textarea-error-icon'));
    expect(icon).not.toBeNull();
  }));

  it('should isLoading', fakeAsync(() => {
    component.isLoading = true;
    fixture.detectChanges();
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    expect(field.nativeElement).toHaveClass('xy-textarea-loading');
    let icon = fixture.debugElement.query(By.css('.xy-textarea-loading-icon'));
    expect(icon).not.toBeNull();
  }));

  it('should edited', fakeAsync(() => {
    component.edited = true;
    fixture.detectChanges();
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    expect(field.nativeElement).toHaveClass('xy-textarea-edited');
    let icon = fixture.debugElement.query(By.css('.xy-textarea-edited-icon'));
    expect(icon).not.toBeNull();
  }));

  it('should success', fakeAsync(() => {
    component.success = true;
    fixture.detectChanges();
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    expect(field.nativeElement).toHaveClass('xy-textarea-success');
    let icon = fixture.debugElement.query(By.css('.xy-textarea-success-icon'));
    expect(icon).not.toBeNull();
  }));

  it('should focus', fakeAsync(() => {
    let input = fixture.debugElement.query(By.css('.xy-textarea'));
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    input.nativeElement.dispatchEvent(new CustomEvent('focus'));
    fixture.detectChanges();
    expect(field.nativeElement).toHaveClass('mat-focused');
  }));

  it('should call onFocus', fakeAsync(() => {
    spyOn(component, 'onFocus');
    let input = fixture.debugElement.nativeElement.querySelector('.xy-textarea');
    input.dispatchEvent(new CustomEvent('focus'));
    fixture.detectChanges();
    expect(component.onFocus).toHaveBeenCalled();
  }));

  it('should blur', fakeAsync(() => {
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    component.blur();
    fixture.detectChanges();
    expect(field.nativeElement).not.toHaveClass('mat-focused');
  }));

  it('should call onBlur', fakeAsync(() => {
    spyOn(component, 'onBlur');
    let button = fixture.debugElement.nativeElement.querySelector('.xy-textarea');
    button.dispatchEvent(new CustomEvent('blur'));
    fixture.detectChanges();
    expect(component.onBlur).toHaveBeenCalled();
  }));
});
