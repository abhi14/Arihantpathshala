import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmanualComponent } from './loginmanual.component';

describe('LoginmanualComponent', () => {
  let component: LoginmanualComponent;
  let fixture: ComponentFixture<LoginmanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginmanualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginmanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
