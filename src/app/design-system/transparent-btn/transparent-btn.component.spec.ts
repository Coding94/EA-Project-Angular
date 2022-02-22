import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparentBtnComponent } from './transparent-btn.component';

describe('TransparentBtnComponent', () => {
  let component: TransparentBtnComponent;
  let fixture: ComponentFixture<TransparentBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparentBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparentBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
