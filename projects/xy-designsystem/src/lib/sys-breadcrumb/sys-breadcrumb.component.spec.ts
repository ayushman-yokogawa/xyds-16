import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysBreadcrumbComponent } from './sys-breadcrumb.component';

describe('SysBreadcrumbComponent', () => {
  let component: SysBreadcrumbComponent;
  let fixture: ComponentFixture<SysBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
