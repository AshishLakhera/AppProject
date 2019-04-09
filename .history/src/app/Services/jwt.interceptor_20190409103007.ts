import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    token;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
         this.token = localStorage.getItem('jwt') ;
        if (this.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${this.token}`
                }
            });
        }

        return next.handle(request);
    }
}