import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareEffectCardComponent } from './square-effect-card.component';

describe('SquareEffectCardComponent', () => {
  let component: SquareEffectCardComponent;
  let fixture: ComponentFixture<SquareEffectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareEffectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareEffectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
