import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { saludNutricionAppGuard } from './salud-nutricion-app.guard';

describe('saludNutricionAppGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => saludNutricionAppGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
