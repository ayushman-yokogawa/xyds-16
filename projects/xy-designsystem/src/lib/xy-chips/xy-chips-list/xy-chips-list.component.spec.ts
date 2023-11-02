import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyChipsListComponent } from './xy-chips-list.component';

describe('XyChipsListComponent', () => {
  let component: XyChipsListComponent;
  let fixture: ComponentFixture<XyChipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyChipsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
