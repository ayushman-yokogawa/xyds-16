import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationExampleComponent } from './elevation-example.component';

describe('ElevationExampleComponent', () => {
  let component: ElevationExampleComponent;
  let fixture: ComponentFixture<ElevationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevationExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
