import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyTopAppBarComponent } from './xy-top-app-bar.component';

describe('XyTopAppBarComponent', () => {
  let component: XyTopAppBarComponent;
  let fixture: ComponentFixture<XyTopAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTopAppBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTopAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
