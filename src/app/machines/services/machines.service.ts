import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../core/services/http.service';
import {IApiDefinition, IResponseBody} from '../../core/base/api.interface';
import {MachinesApi} from '../api/machines.api';
import {Machine} from '../models/machine.model';

@Injectable()
export class MachinesService {

    constructor(private restService: HttpService) {
    }

    getMachineById(id: string): Observable<IResponseBody<Machine>> {
        const apiDef: IApiDefinition<any> = MachinesApi.getMachines();
        apiDef.extendedPath = id;
        return this.restService.sendRequest<IResponseBody<Machine>>(apiDef);
    }

    getMachines(): Observable<IResponseBody<Machine[]>> {
        const apiDef: IApiDefinition<any> = MachinesApi.getMachines();
        return this.restService.sendRequest<IResponseBody<Machine[]>>(apiDef);
    }

}
