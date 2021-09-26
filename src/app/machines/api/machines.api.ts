import {IApiDefinition} from '../../core/base/api.interface';
import {HttpObservers, Methods, ResponseTypes} from '../../core/constants/constants';

export class MachinesApi {
    public static getMachines: () => IApiDefinition<any> = () => {
        return {
            method: Methods.GET,
            path: 'machines',
            options: {
                responseType: ResponseTypes.JSON,
                observe: HttpObservers.BODY
            }
        };
    };
}
