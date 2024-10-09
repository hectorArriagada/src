import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { porteroGuard } from './portero.guard';

describe('porteroGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => porteroGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
