import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyAutocompleteComponent } from './xy-autocomplete.component';

describe('XyAutocompleteComponent', () => {
  let component: XyAutocompleteComponent;
  let fixture: ComponentFixture<XyAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
