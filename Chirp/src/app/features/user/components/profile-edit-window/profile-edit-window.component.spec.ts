import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditWindowComponent } from './profile-edit-window.component';

describe('ProfileEditWindowComponent', () => {
  let component: ProfileEditWindowComponent;
  let fixture: ComponentFixture<ProfileEditWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
