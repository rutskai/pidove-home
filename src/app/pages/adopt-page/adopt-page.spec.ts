import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptPage } from './adopt-page';

describe('AdoptPage', () => {
  let component: AdoptPage;
  let fixture: ComponentFixture<AdoptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
