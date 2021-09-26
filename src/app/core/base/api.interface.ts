import {HttpHeaders, HttpParams} from '@angular/common/http';

/***
 * B - body type
 * D - data type
 */

export interface IApiDefinition<B> {
    method: Method;
    path: string;
    extendedPath?: string;
    options?: IRequestOptions<B>;
}

export interface IResponseBody<D> {
    data: D;
}

export interface IRequestOptions<B> {
    body?: B;
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: HttpObserve;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: ResponseType;
    withCredentials?: boolean;
}


export type Method = 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS';

export type HttpObserve = 'body' | 'events' | 'response';

export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';
