import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlufosinateAmmonium135SlComponent } from './glufosinate-ammonium-13-5-sl.component';

describe('GlufosinateAmmonium135SlComponent', () => {
  let component: GlufosinateAmmonium135SlComponent;
  let fixture: ComponentFixture<GlufosinateAmmonium135SlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlufosinateAmmonium135SlComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GlufosinateAmmonium135SlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
