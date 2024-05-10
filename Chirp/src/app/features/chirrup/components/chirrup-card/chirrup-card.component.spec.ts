import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ChirrupCardComponent } from './chirrup-card.component';
import { ChirrupCardComponent } from 'src/app/shared/components/chirrup-card/chirrup-card.component';
describe('ChirrupCardComponent', () => {
  let component: ChirrupCardComponent;
  let fixture: ComponentFixture<ChirrupCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChirrupCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChirrupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
