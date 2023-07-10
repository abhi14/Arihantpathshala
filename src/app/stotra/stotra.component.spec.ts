import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StotraComponent } from './stotra.component';

describe('StotraComponent', () => {
  let component: StotraComponent;
  let fixture: ComponentFixture<StotraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StotraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StotraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
