import {IResponseBody} from '../../core/base/api.interface';
import {Machine} from '../models/machine.model';

export const DATA_FAKE_RESPONSE: IResponseBody<Machine> = {
    data: {
        floor: 4,
        id: '15c14416-caa2-46da-a435-1c6a01e7e47f',
        install_date: '2015-04-10',
        last_maintenance: '2017-04-01T18:00:00.000000Z',
        latitude: 11.524419045043443,
        longitude: 48.095966783945975,
        machine_type: 'measurement',
        status: 'running'
    }
};

