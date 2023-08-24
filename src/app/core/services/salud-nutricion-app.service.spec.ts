import { TestBed } from '@angular/core/testing';

import { SaludNutricionAppService } from './salud-nutricion-app.service';

describe('SaludNutricionAppService', () => {
  let service: SaludNutricionAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaludNutricionAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
