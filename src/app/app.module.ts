import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './routes/app-routing.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { ServiceModule } from './services/service.module';
import { ModalModule, BsDropdownModule } from "ngx-bootstrap";
import { CookieModule } from 'ngx-cookie';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    ServiceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // LoggerModule.forRoot({ level: environment.ngxLoggerLevel})
    LoggerModule.forRoot({
      level: environment.ngxLoggerLevel,
      serverLogLevel: NgxLoggerLevel.OFF
    }),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
