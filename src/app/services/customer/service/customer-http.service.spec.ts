import { inject, TestBed } from '@angular/core/testing';
import { NGXLogger, NGXLoggerMock } from 'ngx-logger';
import { CustomerHttpService } from './customer-http.service';
import { HttpRestService } from '../../http-rest/service/http-rest.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('CustomerHttpService', () => {
  let service: CustomerHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerHttpService
      ]
    });
    service = TestBed.get(CustomerHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [CustomerHttpService],
    (injectService: CustomerHttpService) => {
      expect(injectService).toBe(service);
    }
  ));
});
