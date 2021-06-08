import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http/src/params';
import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs/Observable';
import { TokenVO } from '../../../model/auth/token/token-vo.model';
import { HttpAppHeaders } from '../model/http-app-headers';

@Injectable()
export class HttpRestService {
  constructor(private http: HttpClient, private logger: NGXLogger) {}

  public getForObject<T>(
    url: string,
    token?: TokenVO,
    httpHeaders?: HttpAppHeaders,
    httpParams?: HttpParams
  ): Observable<T> {
    return this.http.get<T>(url, {
      headers: this.headers(token, httpHeaders),
      params: httpParams
    });
  }

  public postForObject<T>(
    url: string,
    body: any,
    token?: TokenVO,
    httpHeaders?: HttpAppHeaders
  ): Observable<T> {
    return this.http.post<T>(url, body, {
      headers: this.headers(token, httpHeaders)
    });
  }

  public putForObject<T>(
    url: string,
    body: any,
    token?: TokenVO,
    httpHeaders?: HttpAppHeaders,
    httpParams?: HttpParams
  ): Observable<T> {
    return this.http.put<T>(url, body, {
      headers: this.headers(token, httpHeaders),
      params: httpParams
    });
  }

  headers = (token?: TokenVO, httpHeaders?: HttpAppHeaders): any => {
    const result = httpHeaders || new HttpAppHeaders();
    result.add('Accept', 'application/json; charset=utf-8');
    result.add('Content-Type', 'application/json; charset=utf-8');
    if (token) {
      result.add('Authorization', `Bearer ${token.token}`);
    }

    return result.getAll();
  }
}
