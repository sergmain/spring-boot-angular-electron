import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/services/authentication';

@Injectable()

export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    intercept(request: HttpRequest<any> , next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.isAuth()) {
            request = request.clone({
                setHeaders: {
                    Authorization: this.authenticationService.getToken(),
                }
            });
        }

        return next.handle(request);
    }
}