import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app-state';
import {routerReducer} from '@ngrx/router-store';
import * as MachinesReducer from './machines/reducers/machines.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
    routerState: routerReducer,
    machinesState: MachinesReducer.reducer,
};
