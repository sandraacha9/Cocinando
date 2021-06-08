import { TestBed, inject } from '@angular/core/testing';
import { AppModalErrorService } from './app-modal-error.service';

describe('AppModalErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppModalErrorService]
    });
  });

  it('should be created', inject([AppModalErrorService], (service: AppModalErrorService) => {
    expect(service).toBeTruthy();
  }));
});
