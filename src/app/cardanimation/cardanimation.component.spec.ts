import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardanimationComponent } from './cardanimation.component';

describe('CardanimationComponent', () => {
  let component: CardanimationComponent;
  let fixture: ComponentFixture<CardanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardanimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
