import { NgModule } from '@angular/core';
import { HttpRestService } from './service/http-rest.service';;
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRestInterceptorService } from './service/http-rest-interceptor.service';

@NgModule({
  providers: [
    HttpRestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRestInterceptorService,
      multi: true
    }
  ]
})
export class HttpRestModule {}
