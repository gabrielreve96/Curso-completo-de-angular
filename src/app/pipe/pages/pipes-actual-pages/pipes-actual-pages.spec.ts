import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesActualPages } from './pipes-actual-pages';

describe('PipesActualPages', () => {
  let component: PipesActualPages;
  let fixture: ComponentFixture<PipesActualPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesActualPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesActualPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
