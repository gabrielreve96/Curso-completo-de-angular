import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPipes } from './layout-pipes';

describe('LayoutPipes', () => {
  let component: LayoutPipes;
  let fixture: ComponentFixture<LayoutPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutPipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
