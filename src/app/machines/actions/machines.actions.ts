import {createAction, props} from '@ngrx/store';
import {Machine} from '../models/machine.model';

export const getMachine = createAction('[Machines] Get Machine');
export const getMachineSuccess = createAction('[Machines] Get Machine Success', props<{ machine: Machine }>());
export const getMachines = createAction('[Machines] Get Machines');
export const getMachinesSuccess = createAction('[Machines] Get Machines Success', props<{ machines: Machine[] }>());



