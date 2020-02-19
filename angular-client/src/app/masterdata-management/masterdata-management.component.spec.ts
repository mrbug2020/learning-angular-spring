import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdataManagementComponent } from './masterdata-management.component';

describe('MasterdataManagementComponent', () => {
  let component: MasterdataManagementComponent;
  let fixture: ComponentFixture<MasterdataManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdataManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
