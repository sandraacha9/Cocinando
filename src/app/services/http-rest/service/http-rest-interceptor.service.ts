import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpUserEvent
} from '@angular/common/http';

import 'rxjs/add/operator/do';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRestInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const startDate = Date.now();

    return next.handle(request).do(event => {
      if (event instanceof HttpResponse && environment.httpLogs) {
        const elapsed = Date.now() - startDate;
        this.requestResponseLogger(request, event, elapsed);
      }
    });
  }

  requestResponseLogger = (
    request: HttpRequest<any>,
    response: HttpResponse<any>,
    elapsed: number
  ): void => {
    try {
      console.log(
        '%c <--------------------BEGIN REQUEST------------------>',
        'background: blue; color: $color_w'
      );
      // IE bug on stringify HttpRequest.params.map
      console.log(request);
      console.log(
        '%c <--------------------END REQUEST-------------------->',
        'background: blue; color: $color_w'
      );
      console.log(
        '%c <--------------------BEGIN RESPONSE----------------->',
        'background: green; color: $color_w'
      );
      console.log(response);
      console.log(`Request time: ${elapsed} ms`);
      console.log(
        '%c <---------------------END RESPONSE------------------>',
        'background: green; color: $color_w'
      );
    } catch (e) {}
  }
}
