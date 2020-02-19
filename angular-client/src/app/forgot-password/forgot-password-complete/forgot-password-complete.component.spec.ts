import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordCompleteComponent } from './forgot-password-complete.component';

describe('ForgotPasswordCompleteComponent', () => {
  let component: ForgotPasswordCompleteComponent;
  let fixture: ComponentFixture<ForgotPasswordCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
