import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureCardComponent } from './azure-card.component';

describe('AzureCardComponent', () => {
  let component: AzureCardComponent;
  let fixture: ComponentFixture<AzureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
