import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesActualDatePages } from './pipes-actual-date-pages';

describe('PipesActualDatePages', () => {
  let component: PipesActualDatePages;
  let fixture: ComponentFixture<PipesActualDatePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesActualDatePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesActualDatePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
