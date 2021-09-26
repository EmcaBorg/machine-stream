import {HttpObserve, Method, ResponseType} from '../base/api.interface';

export class Constants {
    public static SLASH = '/';
}

export class Headers {
    public static AUTH = 'Authorization';
}

export class Methods {
    public static GET: Method = 'GET';
    public static POST: Method = 'POST';
    public static PUT: Method = 'PUT';
    public static DELETE: Method = 'DELETE';
    public static PATCH: Method = 'PATCH';
}

export class ResponseTypes {
    public static ARRAY_BUFFER: ResponseType = 'arraybuffer';
    public static BLOB: ResponseType = 'blob';
    public static JSON: ResponseType = 'json';
    public static TEXT: ResponseType = 'text';
}

export class HttpObservers {
    public static BODY: HttpObserve = 'body';
    public static EVENTS: HttpObserve = 'events';
    public static RESPONSE: HttpObserve = 'response';
}







































