import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigeonCards } from './pigeon-cards';

describe('PigeonCards', () => {
  let component: PigeonCards;
  let fixture: ComponentFixture<PigeonCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PigeonCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigeonCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
