import { TestBed, inject } from '@angular/core/testing';

import { AppModalsService } from './app-modals.service';

describe('AppModalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppModalsService]
    });
  });

  it('should be created', inject([AppModalsService], (service: AppModalsService) => {
    expect(service).toBeTruthy();
  }));
});
