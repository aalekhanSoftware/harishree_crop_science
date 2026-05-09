import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Thiamethoxam30FsComponent } from './thiamethoxam-30-fs.component';

describe('Thiamethoxam30FsComponent', () => {
  let component: Thiamethoxam30FsComponent;
  let fixture: ComponentFixture<Thiamethoxam30FsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thiamethoxam30FsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Thiamethoxam30FsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

