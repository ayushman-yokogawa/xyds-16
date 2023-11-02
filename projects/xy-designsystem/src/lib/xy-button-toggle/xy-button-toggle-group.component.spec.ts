import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { XyButtonToggleGroupComponent } from './xy-button-toggle-group.component';
import {XyButtonComponent} from "../xy-button/xy-button.component";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatIconModule} from "@angular/material/icon";
import {XyButtonToggleComponent} from "./xy-button-toggle.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('XyButtonToggleGroupComponent', () => {
  let component: XyButtonToggleGroupComponent;
  let fixture: ComponentFixture<XyButtonToggleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyButtonToggleGroupComponent, XyButtonToggleComponent ],
      imports: [
        MatButtonToggleModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyButtonToggleGroupComponent);
    component = fixture.componentInstance;
    component.dataSource.push({
        content: '',
        value: 'favorite',
        icon: 'favorite',
        _disabled: false,
      });
    component.dataSource.push({
        content: '',
        value: 'visibility',
        icon: 'visibility',
        _disabled: false,
      });
    component.dataSource.push({
        content: '',
        value: 'notifications',
        icon: 'notifications',
        _disabled: false,
      });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disabled', fakeAsync(() => {
    component.disabled = 'true';
    fixture.detectChanges();
    tick();
    let buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.mat-button-toggle-button'));
    buttons.forEach((button) => {
      expect(button.nativeElement.disabled).toBeTrue();
    });
  }));

  it('should disabled one of buttons', fakeAsync(() => {
    component.dataSource[1]._disabled = true;
    fixture.detectChanges();
    tick();
    let buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.mat-button-toggle'));
    buttons.forEach((button) => {
      let value = button.nativeElement.getAttribute('ng-reflect-value');
      if (value == 'visibility') {
        expect(button.query(By.css('.mat-button-toggle-button')).nativeElement.disabled).toBeTrue();
      } else {
        expect(button.nativeElement.disabled).toBeUndefined();
      }
    });
  }));

  it('should selected', fakeAsync(() => {
    component.value = 'visibility';
    fixture.detectChanges();
    tick();
    let buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.mat-button-toggle-checked'));
    buttons.forEach((button) => {
      expect(button.nativeElement.getAttribute('ng-reflect-value')).toBe('visibility');
    });
  }));

  it('should selected multiple', fakeAsync(() => {
    component.multiple = true;
    component.value = ['favorite','visibility'];
    fixture.detectChanges();
    tick();
    let buttons: DebugElement[] = fixture.debugElement.queryAll(By.css('.mat-button-toggle-checked'));
    let values: Array<string> = [];
    buttons.forEach((button) => {
      values.push( button.nativeElement.getAttribute('ng-reflect-value') );
    });
    expect(values).toEqual(jasmine.arrayContaining(['favorite','visibility']));
  }));
});
