import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyBreadcrumbComponent } from './xy-breadcrumb.component';

describe('XyBreadcrumbComponent', () => {
  let component: XyBreadcrumbComponent;
  let fixture: ComponentFixture<XyBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
