import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {catchError, retry, tap} from 'rxjs/operators';
import {Observable, EMPTY} from 'rxjs';
import {IApiDefinition} from '../base/api.interface';
import {Constants, Headers, HttpObservers} from '../constants/constants';
import {Environment} from '../../../environments/environment';

/***
 * R - response type
 */

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) {

    }

    private errorHandler: (response: HttpErrorResponse) => Observable<any> = (response: HttpErrorResponse) => {
        if (response.status === 401 || response.status === 403) {
            // handle logic for unauthorized or forbidden statuses
        }
        return EMPTY;
    }

    public generateUrl(apiDefinition: IApiDefinition<any>): string {
        let url: string;
        url = `${Environment.protocol}://${Environment.host}:${Environment.port}/api/${Environment.version}/${apiDefinition.path}`;
        if (apiDefinition.extendedPath) {
            url += Constants.SLASH + apiDefinition.extendedPath;
        }
        return url;
    }

    public sendRequest<R>(apiDefinition: IApiDefinition<any>): Observable<R> {
        const url: string = this.generateUrl(apiDefinition);
        return this.httpClient.request(apiDefinition.method, url, apiDefinition.options)
            .pipe(
                retry(2),
                tap((response: HttpResponse<R>) => {
                    if (Environment.debug) {
                        console.log(`URL: - ${url} \n METHOD: ${apiDefinition.method} \n RESPONSE: ${JSON.stringify(apiDefinition.options.observe === HttpObservers.RESPONSE ? response.body : response)}`);
                    }
                }),
                catchError(this.errorHandler)
            );
    }
}

@Injectable()
export class SessionInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedReq = req.clone({
            headers: req.headers.set(Headers.AUTH, 'Bearer ')
        });
        return next.handle(clonedReq);
    }

}





