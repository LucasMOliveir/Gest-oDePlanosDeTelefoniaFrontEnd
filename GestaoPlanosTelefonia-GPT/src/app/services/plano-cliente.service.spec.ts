import { TestBed } from '@angular/core/testing';

import { PlanoClienteService } from './plano-cliente.service';

describe('PlanoClienteService', () => {
  let service: PlanoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
