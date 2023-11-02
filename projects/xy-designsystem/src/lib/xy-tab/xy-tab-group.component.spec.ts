import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { XyTabGroupComponent } from './xy-tab-group.component';
import {By} from "@angular/platform-browser";
import {MatLegacyTab as MatTab, MatLegacyTabGroup as MatTabGroup, MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {XyTabComponent} from "./xy-tab.component";
import {ElementRef, NO_ERRORS_SCHEMA} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('XyTabGroupComponent', () => {
  let component: XyTabGroupComponent;
  let fixture: ComponentFixture<XyTabGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTabGroupComponent, XyTabComponent ],
      imports: [ MatTabsModule, BrowserAnimationsModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTabGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create tabs', fakeAsync(() => {
    
    fixture.detectChanges();
    let buttons = fixture.debugElement.queryAll(By.css('.mat-tab-label'));
    expect(buttons.length).toEqual(3);
  }));

  it('should disable', fakeAsync(() => {
 
    component.disabled = true;
    fixture.detectChanges();
    let buttons = fixture.debugElement.queryAll(By.css('.mat-tab-label'));
    for (const button of buttons) {
      expect(button.nativeElement).toHaveClass('mat-tab-disabled');
    }
  }));

  it('should disable tab', fakeAsync(() => {
   
    fixture.detectChanges();
    let buttons = fixture.debugElement.queryAll(By.css('.mat-tab-label'));
    expect(buttons[0].nativeElement).not.toHaveClass('mat-tab-disabled');
    expect(buttons[1].nativeElement).toHaveClass('mat-tab-disabled');
    expect(buttons[2].nativeElement).not.toHaveClass('mat-tab-disabled');
  }));

  it('should enable', fakeAsync(() => {
    component.disabled = false;
    fixture.detectChanges();
    let buttons = fixture.debugElement.queryAll(By.css('.mat-tab-label'));
    for (const button of buttons) {
      expect(button.nativeElement).not.toHaveClass('mat-tab-disabled');
    }
  }));
});
