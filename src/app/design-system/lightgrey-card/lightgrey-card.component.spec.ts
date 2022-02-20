import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightgreyCardComponent } from './lightgrey-card.component';

describe('LightgreyCardComponent', () => {
  let component: LightgreyCardComponent;
  let fixture: ComponentFixture<LightgreyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightgreyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightgreyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
