import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyTreeComponent } from './xy-tree.component';

describe('XyTreeComponent', () => {
  let component: XyTreeComponent;
  let fixture: ComponentFixture<XyTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
