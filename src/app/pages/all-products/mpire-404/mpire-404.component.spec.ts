import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mpire404Component } from './mpire-404.component';

describe('Mpire404Component', () => {
  let component: Mpire404Component;
  let fixture: ComponentFixture<Mpire404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mpire404Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Mpire404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
