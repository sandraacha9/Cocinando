import { HttpRestService } from '../../http-rest/service/http-rest.service';
import { TokenServiceMock } from './../../../core/services/token/testing/token.service.mock';
import { inject, TestBed } from '@angular/core/testing';
import { LoginHttpService } from './login-http.service';
import { NGXLogger, NGXLoggerMock } from 'ngx-logger';
import { TokenService } from '../../../core/services/token/token.service';
import { LoginConverterService } from './../converter/login-converter.service';

/**
 * Documentation:
 * https://angular.io/guide/testing#!#isolated-service-tests
 * https://kirjai.com/testing-angular-services-with-dependencies/
 */
describe('LoginHttpService', () => {
  let service: LoginHttpService;
  let httpRestServiceSpy: jasmine.SpyObj<HttpRestService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginHttpService,
        { provide: NGXLogger, useClass: NGXLoggerMock },
        { provide: TokenService, useClass: TokenServiceMock },
        LoginConverterService,
        {
          provide: HttpRestService,
          useValue: jasmine.createSpyObj('HttpRestService', ['getForObject'])
        }
      ]
    });
    service = TestBed.get(LoginHttpService);
    httpRestServiceSpy = TestBed.get(HttpRestService);
  });

  it('should create class', () => {
    expect(service).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', inject(
    [LoginHttpService],
    (injectService: LoginHttpService) => {
      expect(injectService).toBe(service);
    }
  ));

  it('should return login successfully', () => {
    // // mock login response
    // const mockhttp: LoginResponse = new LoginResponse('token', 'type');
    // httpRestServiceSpy.getForObject.and.returnValue(
    //   asyncData<LoginResponse>(mockhttp)
    // );
    // const expectedTestResult: LoginResponseVO = new LoginResponseVO(null, 'token', 'type');
    // const login: LoginVO = {user: 'user', pass: 'pass'};
    // service.doLogin(login).subscribe(
    //   response => expect(response).toEqual(expectedTestResult, 'expected response')
    // );
    // expect(httpRestServiceSpy.getForObject.calls.count()).toBe(1, 'one call');
  });
});
