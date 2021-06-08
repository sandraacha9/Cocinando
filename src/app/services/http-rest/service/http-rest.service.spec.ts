import { inject, TestBed } from '@angular/core/testing';

import { HttpRestService } from './http-rest.service';

describe('HttpRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRestService]
    });
  });

  it('should be created', inject([HttpRestService], (service: HttpRestService) => {
    expect(service).toBeTruthy();
  }));
});
