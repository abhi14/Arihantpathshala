import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArihantloginComponent } from './arihantlogin.component';

describe('ArihantloginComponent', () => {
  let component: ArihantloginComponent;
  let fixture: ComponentFixture<ArihantloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArihantloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArihantloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
