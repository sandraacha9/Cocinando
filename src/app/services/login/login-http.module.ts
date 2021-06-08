import { LoginConverterService } from './converter/login-converter.service';
import { LoginHttpService } from './service/login-http.service';
import { NgModule } from '@angular/core';

@NgModule({
  providers: [LoginHttpService, LoginConverterService]
})
export class LoginHttpModule {}
