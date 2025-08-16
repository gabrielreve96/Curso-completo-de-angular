import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesActualNumbersPages } from './pipes-actual-numbers-pages';

describe('PipesActualNumbersPages', () => {
  let component: PipesActualNumbersPages;
  let fixture: ComponentFixture<PipesActualNumbersPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesActualNumbersPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesActualNumbersPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
