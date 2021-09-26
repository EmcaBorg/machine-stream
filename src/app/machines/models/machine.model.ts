import {BaseModel} from '../../core/base/base.model';

export class Event {
    machine_id: string;
    id: string;
    timestamp: string;
    status: string;
}

export class Machine extends BaseModel {

    status: string;
    machine_type: string;
    longitude: number;
    latitude: number;
    last_maintenance: string;
    install_date: string;
    floor: number;
    events?: Event[];
}
