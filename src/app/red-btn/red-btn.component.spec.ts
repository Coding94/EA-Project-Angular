import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBtnComponent } from './red-btn.component';

describe('RedBtnComponent', () => {
  let component: RedBtnComponent;
  let fixture: ComponentFixture<RedBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
