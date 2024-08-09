import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  private cache = new Map<string, { response: HttpResponse<unknown>; timestamp: number }>();
  private cacheExpiryMs = 5 * 60 * 1000;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cache.get(request.urlWithParams);

    if (cachedResponse) {
      const isExpired = Date.now() - cachedResponse.timestamp > this.cacheExpiryMs;

      if (!isExpired) {
        return of(cachedResponse.response.clone());
      } else {
        this.cache.delete(request.urlWithParams);
      }
    }

    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.set(request.urlWithParams, {
            response: event.clone(),
            timestamp: Date.now(),
          });
        }
      }),
    );
  }
}
