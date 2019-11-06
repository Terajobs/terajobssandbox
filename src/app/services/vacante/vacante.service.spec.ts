import { TestBed } from '@angular/core/testing';

import { VacanteService } from './vacante.service';

describe('VacanteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VacanteService = TestBed.get(VacanteService);
    expect(service).toBeTruthy();
  });
});
