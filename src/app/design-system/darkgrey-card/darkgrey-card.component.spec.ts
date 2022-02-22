import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkgreyCardComponent } from './darkgrey-card.component';

describe('DarkgreyCardComponent', () => {
  let component: DarkgreyCardComponent;
  let fixture: ComponentFixture<DarkgreyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkgreyCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkgreyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
