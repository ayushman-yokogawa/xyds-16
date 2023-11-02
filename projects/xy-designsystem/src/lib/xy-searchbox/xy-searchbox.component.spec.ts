import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {XySearchboxComponent} from './xy-searchbox.component';
import {By} from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('XySearchboxComponent', () => {
  let component: XySearchboxComponent;
  let fixture: ComponentFixture<XySearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySearchboxComponent ],
      imports: [ MatInputModule, MatIconModule, ReactiveFormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-searchbox'));
    expect(input.nativeElement.disabled).toBeTrue();
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = false;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-searchbox'));
    expect(input.nativeElement.disabled).toBeFalse();
  }));

  it('should focus', fakeAsync(() => {
    let input = fixture.debugElement.query(By.css('.xy-searchbox'));
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    input.nativeElement.dispatchEvent(new CustomEvent('focus'));
    fixture.detectChanges();
    expect(field.nativeElement).toHaveClass('mat-focused');
  }));

  it('should call onFocus', fakeAsync(() => {
    spyOn(component, 'onFocus');
    let input = fixture.debugElement.nativeElement.querySelector('.xy-searchbox');
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
    let button = fixture.debugElement.nativeElement.querySelector('.xy-searchbox');
    button.dispatchEvent(new CustomEvent('blur'));
    fixture.detectChanges();
    expect(component.onBlur).toHaveBeenCalled();
  }));
});
