import { inject, TestBed } from '@angular/core/testing';
import { CreateOrderHttpService } from './create-order-http.service';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('CreateOrderHttpService', () => {
  let service: CreateOrderHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreateOrderHttpService
      ]
    });
    service = TestBed.get(CreateOrderHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [CreateOrderHttpService],
    (injectService: CreateOrderHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
