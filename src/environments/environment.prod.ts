import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
  production: true,
  use_mocks: true,
  ngxLoggerLevel: NgxLoggerLevel.ERROR,
  httpLogs: false,
  endpoint_url: ''
};
