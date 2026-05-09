import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperFsComponent } from './super-fs.component';

describe('SuperFsComponent', () => {
  let component: SuperFsComponent;
  let fixture: ComponentFixture<SuperFsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperFsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperFsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
