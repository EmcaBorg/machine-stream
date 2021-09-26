import * as MachinesActions from '../actions/machines.actions';
import {MachinesState, initialMachinesState} from '../states/machines.state';
import {Action, createReducer, on} from '@ngrx/store';

const machinesReducer = createReducer(
    initialMachinesState,
    on(MachinesActions.getMachineSuccess, (state, {machine}) => ({...state, machine: machine})),
    on(MachinesActions.getMachinesSuccess, (state, {machines}) => ({...state, machines: machines})),
);

export function reducer(state: MachinesState | undefined, action: Action) {
    return machinesReducer(state, action);
}


