import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevdarshanComponent } from './devdarshan.component';

describe('DevdarshanComponent', () => {
  let component: DevdarshanComponent;
  let fixture: ComponentFixture<DevdarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevdarshanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevdarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
