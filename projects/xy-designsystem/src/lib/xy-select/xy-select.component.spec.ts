import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {XySelectComponent} from './xy-select.component';
import {By} from "@angular/platform-browser";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatLegacySelectModule as MatSelectModule} from "@angular/material/legacy-select";

describe('XySelectComponent', () => {
  let component: XySelectComponent;
  let fixture: ComponentFixture<XySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySelectComponent ],
      imports: [ MatSelectModule, MatIconModule, ReactiveFormsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable', fakeAsync(() => {
    component.disabled = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-select'));
    expect(input.nativeElement).toHaveClass('mat-select-disabled');
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = false;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-select'));
    expect(input.nativeElement).not.toHaveClass('mat-select-disabled');
  }));

  it('should required', fakeAsync(() => {
    component.required = true;
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css('.xy-select'));
    expect(input.nativeElement).toHaveClass('mat-select-required');
  }));

  it('should small', fakeAsync(() => {
    component.small = true;
    fixture.detectChanges();
    let field = fixture.debugElement.query(By.css('mat-mdc-form-field'));
    expect(field.nativeElement).toHaveClass('xy-select-small');
  }));

  it('should call onChange on change select', () => {
    let input = fixture.debugElement.query(By.css('.xy-select'));
    spyOn(component, 'onChange');
    input.triggerEventHandler('valueChange', {});

    expect(component.onChange).toHaveBeenCalled();
  })
});
