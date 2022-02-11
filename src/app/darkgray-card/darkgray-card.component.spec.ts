import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkgrayCardComponent } from './darkgray-card.component';

describe('DarkgrayCardComponent', () => {
  let component: DarkgrayCardComponent;
  let fixture: ComponentFixture<DarkgrayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkgrayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkgrayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
