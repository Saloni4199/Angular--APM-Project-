import { TestBed } from '@angular/core/testing';

import { ProductDetailGuardGuard } from './product-detail-guard.guard';

describe('ProductDetailGuardGuard', () => {
  let guard: ProductDetailGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetailGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
