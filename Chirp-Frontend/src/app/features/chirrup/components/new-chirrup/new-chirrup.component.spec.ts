import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChirrupComponent } from './new-chirrup.component';

describe('NewChirrupComponent', () => {
  let component: NewChirrupComponent;
  let fixture: ComponentFixture<NewChirrupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChirrupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewChirrupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
