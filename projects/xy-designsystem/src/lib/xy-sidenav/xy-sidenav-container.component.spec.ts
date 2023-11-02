import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XySidenavContainerComponent } from './xy-sidenav-container.component';
import {ElementRef} from "@angular/core";

describe('XySidenavContainerComponent', () => {
  let component: XySidenavContainerComponent;
  let fixture: ComponentFixture<XySidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XySidenavContainerComponent ],
      providers: [
        { provide: ElementRef, useClass: MockElementRef }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XySidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockElementRef implements ElementRef {
  nativeElement = {};
}
