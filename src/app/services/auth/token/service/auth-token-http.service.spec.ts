import { TestBed, inject } from '@angular/core/testing';
import { AuthTokenHttpService } from './auth-token-http.service';

describe('AuthTokenHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthTokenHttpService]
    });
  });

  it('should be created', inject([AuthTokenHttpService], (service: AuthTokenHttpService) => {
    expect(service).toBeTruthy();
  }));
});
