import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedWhiteCardComponent } from './red-white-card.component';

describe('RedWhiteCardComponent', () => {
  let component: RedWhiteCardComponent;
  let fixture: ComponentFixture<RedWhiteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RedWhiteCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedWhiteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
