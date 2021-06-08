import { inject, TestBed} from '@angular/core/testing';
import { AuthGuardConfirmation } from './auth-guard-confirmation.service';

describe('AuthGuardConfirmationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardConfirmation]
    });
  });

  it('should be created', inject([AuthGuardConfirmation], (service: AuthGuardConfirmation) => {
    expect(service).toBeTruthy();
  }));
});
