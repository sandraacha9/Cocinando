import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/defer';

/** Create async observable that emits-once and completes
 *  after a JS engine turn
 */
// https://angular.io/guide/testing#async-observable-helpers
export function asyncData<T>(data: T): Observable<T> {
  return Observable.defer(() => Promise.resolve(data));
}
