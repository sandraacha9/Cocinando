import { inject, TestBed} from '@angular/core/testing';
import { CustomerStorageService } from './customer-storage.service';

describe('CustomerStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerStorageService]
    });
  });

  it('should be created', inject([CustomerStorageService], (service: CustomerStorageService) => {
    expect(service).toBeTruthy();
  }));
});
