import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ErrorVO } from '../../../model/exceptions/error-vo.model';

@Injectable()
export class HttpErrorHandlerService {
  processing: boolean;

  constructor(
    private logger: NGXLogger,
    private router: Router
  ) {
    this.processing = false;
  }

  handler(error: any): Observable<void> {
    let result: Observable<void> = Observable.throw(false);
    if (!this.processing) {
      this.processing = true;
      try {
        result = Observable.throw(this.innerHandler(error));
      } catch (err) {
        this.logger.error(`error handling an error ${err}`);
      }
    }

    return result;
  }

  private innerHandler(error: any): any {
    let errorCode = 'generic';
    let onClose: Function = () => (this.processing = false);
    if (error instanceof HttpErrorResponse) {
      this.logger.error(
        `[HttpErrorHandlerService] - handler [${JSON.stringify(error)}]`
      );
      const httpError = error as HttpErrorResponse;
      // Http failure response for (unknown url): 0 Unknown Error
      if (httpError && httpError.status === 0) {
        onClose = () => {
          this.processing = false;
          this.router.navigate(['./']);
        };
      } else if (
        httpError &&
        !httpError.error.code &&
        httpError.status === 401
      ) {
        errorCode = 'token_invalid';
        onClose = () => {
          this.processing = false;
          this.router.navigate(['./']);
        };
      } else if (
        httpError.error &&
        httpError.error.code &&
        httpError.error.description
      ) {
        errorCode = httpError.error.code;
      }
    } else {
      this.logger.error(`[HttpErrorHandlerService] - handler [${error}]`);
      console.log(error);
    }
    const errorInfo: ErrorVO = new ErrorVO(undefined, `httpExceptions.responseErrors.${errorCode}`);

    return error;
  }

  getCustomError = (error: any): ErrorVO => {
    return new ErrorVO(undefined, '1');
  }
}
