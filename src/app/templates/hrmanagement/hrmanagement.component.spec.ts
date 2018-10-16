import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmanagementComponent } from './hrmanagement.component';

describe('HrmanagementComponent', () => {
  let component: HrmanagementComponent;
  let fixture: ComponentFixture<HrmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
