import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletExampleComponent } from './autocomplet-example.component';

describe('AutocompletExampleComponent', () => {
  let component: AutocompletExampleComponent;
  let fixture: ComponentFixture<AutocompletExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
