import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysSidebarItemComponent } from './sys-sidebar-item.component';

describe('SysSidebarItemComponent', () => {
  let component: SysSidebarItemComponent;
  let fixture: ComponentFixture<SysSidebarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysSidebarItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysSidebarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
