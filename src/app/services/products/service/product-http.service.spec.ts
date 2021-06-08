import { inject, TestBed } from '@angular/core/testing';
import { HttpRestService } from '../../http-rest/service/http-rest.service';
import { ProductHttpService } from './product-http.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('ProductHttpService', () => {
  let service: ProductHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductHttpService
      ]
    });
    service = TestBed.get(ProductHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [ProductHttpService],
    (injectService: ProductHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
