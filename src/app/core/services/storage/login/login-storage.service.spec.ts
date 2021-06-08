import {  inject, TestBed } from '@angular/core/testing';

import { LoginStorageService } from './login-storage.service';

describe('LoginStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginStorageService]
    });
  });

  it('should be created', inject([LoginStorageService], (service: LoginStorageService) => {
    expect(service).toBeTruthy();
  }));
});
