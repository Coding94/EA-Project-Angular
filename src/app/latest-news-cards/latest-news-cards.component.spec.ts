import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsCardsComponent } from './latest-news-cards.component';

describe('LatestNewsCardsComponent', () => {
  let component: LatestNewsCardsComponent;
  let fixture: ComponentFixture<LatestNewsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestNewsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestNewsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
