import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassEffectCardComponent } from './mass-effect-card.component';

describe('MassEffectCardComponent', () => {
  let component: MassEffectCardComponent;
  let fixture: ComponentFixture<MassEffectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassEffectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassEffectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
