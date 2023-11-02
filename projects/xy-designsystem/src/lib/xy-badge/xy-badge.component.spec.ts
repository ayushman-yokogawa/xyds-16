import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XyBadgeComponent } from './xy-badge.component';

describe('XyBadgeComponent', () => {
  let component: XyBadgeComponent;
  let fixture: ComponentFixture<XyBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyBadgeComponent ],
      imports: [ MatBadgeModule, ReactiveFormsModule, BrowserAnimationsModule ],
      providers: [{
        provide: XyBadgeComponent,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
