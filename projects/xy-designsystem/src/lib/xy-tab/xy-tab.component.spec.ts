import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { XyTabComponent } from './xy-tab.component';
import {By} from "@angular/platform-browser";
import {MatLegacyTab as MatTab, MatLegacyTabGroup as MatTabGroup, MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";

describe('XyTabComponent', () => {
  let component: XyTabComponent;
  let fixture: ComponentFixture<XyTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTabComponent ],
      imports: [ MatTabsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
