import { TestBed, inject } from '@angular/core/testing';

import { CategoryGetHttpService } from './category-get-http.service';

describe('CategoryGetHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryGetHttpService]
    });
  });

  it('should be created', inject([CategoryGetHttpService], (service: CategoryGetHttpService) => {
    expect(service).toBeTruthy();
  }));
});
