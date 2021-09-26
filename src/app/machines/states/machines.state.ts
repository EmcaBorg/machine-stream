import {Machine} from '../models/machine.model';

export interface MachinesState {
    machine: Machine;
    machines: Machine[];
}

export const initialMachinesState: MachinesState = {
    machine: null,
    machines: []
};
