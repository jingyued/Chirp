import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordWindowComponent } from './change-password-window.component';

describe('ChangePasswordWindowComponent', () => {
  let component: ChangePasswordWindowComponent;
  let fixture: ComponentFixture<ChangePasswordWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
