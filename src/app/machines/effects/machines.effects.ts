import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {MachinesService} from '../services/machines.service';
import {AppState} from '../../app-state';
import {createFeatureSelector, select, Store} from '@ngrx/store';
import {IResponseBody} from '../../core/base/api.interface';
import {Machine} from '../models/machine.model';
import {RouterReducerState} from '@ngrx/router-store';
import * as fromRouter from '@ngrx/router-store';
import * as MachinesActions from '../actions/machines.actions';

export const getRouterState = createFeatureSelector<RouterReducerState>('routerState');
export const {selectRouteParam} = fromRouter.getSelectors(getRouterState);

@Injectable()
export class MachinesEffects {

    getMachine = createEffect(() =>
        this.actions.pipe(
            ofType('[Machines] Get Machine'),
            switchMap(() => this.store.pipe(select(selectRouteParam('id')))),
            switchMap(id => this.machinesService.getMachineById(id)),
            switchMap((responseBody: IResponseBody<Machine>) => of(MachinesActions.getMachineSuccess({machine: responseBody.data})))
        )
    );

    getMachines = createEffect(() =>
        this.actions.pipe(
            ofType('[Machines] Get Machines'),
            switchMap(action => this.machinesService.getMachines()),
            switchMap((responseBody: IResponseBody<Machine[]>) => of(MachinesActions.getMachinesSuccess({machines: responseBody.data})))
        )
    );

    constructor(
        private store: Store<AppState>,
        private actions: Actions,
        private machinesService: MachinesService
    ) {
    }
}
