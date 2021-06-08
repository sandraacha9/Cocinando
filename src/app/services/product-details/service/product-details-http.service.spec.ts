import { inject, TestBed } from '@angular/core/testing';
import { HttpRestService } from '../../http-rest/service/http-rest.service';
import { ProductDetailsHttpService } from './product-details-http.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('ProductDetailsHttpService', () => {
  let service: ProductDetailsHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductDetailsHttpService
      ]
    });
    service = TestBed.get(ProductDetailsHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [ProductDetailsHttpService],
    (injectService: ProductDetailsHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
