import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThioHComponent } from './thio-h.component';

describe('ThioHComponent', () => {
  let component: ThioHComponent;
  let fixture: ComponentFixture<ThioHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThioHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThioHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
