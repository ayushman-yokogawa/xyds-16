import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterExampleComponent } from './footer-example.component';

describe('FooterExampleComponent', () => {
  let component: FooterExampleComponent;
  let fixture: ComponentFixture<FooterExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
