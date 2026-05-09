import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profenofos40Cypermethrin4EcComponent } from './profenofos-40-cypermethrin-4-ec.component';

describe('Profenofos40Cypermethrin4EcComponent', () => {
  let component: Profenofos40Cypermethrin4EcComponent;
  let fixture: ComponentFixture<Profenofos40Cypermethrin4EcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profenofos40Cypermethrin4EcComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Profenofos40Cypermethrin4EcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
