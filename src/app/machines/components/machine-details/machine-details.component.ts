import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {selectMachine} from '../../selectors/machines.selectors';
import {Observable} from 'rxjs';
import {Machine} from '../../models/machine.model';
import * as MachinesActions from '../../actions/machines.actions';

@Component({
    selector: 'app-machine-details',
    templateUrl: './machine-details.component.html',
    styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent implements OnInit {

    machine$: Observable<Machine> = this.store.select(selectMachine);

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        this.store.dispatch(MachinesActions.getMachine());
    }

}
