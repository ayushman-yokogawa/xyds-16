import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ExampleComponent } from './child2-example.component';

describe('Child2ExampleComponent', () => {
  let component: Child2ExampleComponent;
  let fixture: ComponentFixture<Child2ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2ExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
