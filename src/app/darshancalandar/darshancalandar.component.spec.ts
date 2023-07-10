import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshancalandarComponent } from './darshancalandar.component';

describe('DarshancalandarComponent', () => {
  let component: DarshancalandarComponent;
  let fixture: ComponentFixture<DarshancalandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshancalandarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshancalandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
