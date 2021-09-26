import {AppState} from '../../app-state';
import {MachinesState} from '../states/machines.state';
import {createSelector} from '@ngrx/store';

export const selectMachinesState = (state: AppState) => state.machinesState;

export const selectMachine = createSelector(
    selectMachinesState,
    (state: MachinesState) => state.machine
);

export const selectMachines = createSelector(
    selectMachinesState,
    (state: MachinesState) => state.machines
);
