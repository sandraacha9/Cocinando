import { inject, TestBed } from '@angular/core/testing';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { GetOrderByIdHttpService } from './get-order-by-id-http.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('GetOrderByIdHttpService', () => {
  let service: GetOrderByIdHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetOrderByIdHttpService
      ]
    });
    service = TestBed.get(GetOrderByIdHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [GetOrderByIdHttpService],
    (injectService: GetOrderByIdHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
