import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueFormButtonComponent } from './blue-form-button.component';

describe('BlueFormButtonComponent', () => {
  let component: BlueFormButtonComponent;
  let fixture: ComponentFixture<BlueFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
