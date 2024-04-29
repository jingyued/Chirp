import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirrupCommentComponent } from './chirrup-comment.component';

describe('ChirrupCommentComponent', () => {
  let component: ChirrupCommentComponent;
  let fixture: ComponentFixture<ChirrupCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChirrupCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChirrupCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
