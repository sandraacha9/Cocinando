import { inject, TestBed} from '@angular/core/testing';
import { TokenServiceMock } from './token.service.mock';

describe('TokenServiceMock', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenServiceMock]
    });
  });

  it('should be created', inject([TokenServiceMock], (service: TokenServiceMock) => {
    expect(service).toBeTruthy();
  }));
});
