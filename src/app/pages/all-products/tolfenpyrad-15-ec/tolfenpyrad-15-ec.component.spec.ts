import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Tolfenpyrad15EcComponent } from './tolfenpyrad-15-ec.component';

describe('Tolfenpyrad15EcComponent', () => {
  let component: Tolfenpyrad15EcComponent;
  let fixture: ComponentFixture<Tolfenpyrad15EcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tolfenpyrad15EcComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Tolfenpyrad15EcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
