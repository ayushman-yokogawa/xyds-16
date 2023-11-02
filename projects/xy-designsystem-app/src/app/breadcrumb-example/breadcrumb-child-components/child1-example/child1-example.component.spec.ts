import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ExampleComponent } from './child1-example.component';

describe('Child1ExampleComponent', () => {
  let component: Child1ExampleComponent;
  let fixture: ComponentFixture<Child1ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1ExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
