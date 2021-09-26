import {MachinesState, initialMachinesState} from './machines/states/machines.state';
import {RouterReducerState} from '@ngrx/router-store';

export interface AppState {
    routerState?: RouterReducerState;
    machinesState: MachinesState;
}

export const initialState: AppState = {
    machinesState: initialMachinesState,
};
