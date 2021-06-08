import { NgModule } from '@angular/core';

import { AuthTokenHttpService } from './service/auth-token-http.service';
import { AuthTokenHttpConverterService } from './converter/auth-token-http-converter.service';
import { TokenConverterService } from './converter/token-converter.service';

@NgModule({
  providers: [AuthTokenHttpService, AuthTokenHttpConverterService, TokenConverterService]
})
export class TokenModule {}
