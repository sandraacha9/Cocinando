import { inject, TestBed } from '@angular/core/testing';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { GetOrdersHttpService } from './get-orders-http.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('GetOrdersHttpService', () => {
  let service: GetOrdersHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetOrdersHttpService
      ]
    });
    service = TestBed.get(GetOrdersHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [GetOrdersHttpService],
    (injectService: GetOrdersHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
