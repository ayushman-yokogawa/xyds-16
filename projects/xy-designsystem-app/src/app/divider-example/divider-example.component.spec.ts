import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerExampleComponent } from './divider-example.component';

describe('DividerExampleComponent', () => {
  let component: DividerExampleComponent;
  let fixture: ComponentFixture<DividerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
