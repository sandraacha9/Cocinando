import { inject, TestBed } from '@angular/core/testing';
import { HttpRestService } from '../../../http-rest/service/http-rest.service';
import { OrderItemAddHttpService } from './order-item-add-http.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('OrderItemAddHttpService', () => {
  let service: OrderItemAddHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderItemAddHttpService
      ]
    });
    service = TestBed.get(OrderItemAddHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [OrderItemAddHttpService],
    (injectService: OrderItemAddHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
