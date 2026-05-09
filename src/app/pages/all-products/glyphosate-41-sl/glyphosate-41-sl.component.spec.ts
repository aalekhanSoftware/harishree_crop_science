import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glyphosate41SlComponent } from './glyphosate-41-sl.component';

describe('Glyphosate41SlComponent', () => {
  let component: Glyphosate41SlComponent;
  let fixture: ComponentFixture<Glyphosate41SlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glyphosate41SlComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Glyphosate41SlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
