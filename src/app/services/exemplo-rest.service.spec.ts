import { TestBed, inject } from '@angular/core/testing';

import { ExemploRestService } from './exemplo-rest.service';

describe('ExemploRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExemploRestService]
    });
  });

  it('should be created', inject([ExemploRestService], (service: ExemploRestService) => {
    expect(service).toBeTruthy();
  }));
});
