import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../app-state';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {selectMachines} from '../../selectors/machines.selectors';
import {Event, Machine} from '../../models/machine.model';
import {Subscription, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {SocketService} from '../../../core/services/socket.service';
import * as MachinesActions from '../../actions/machines.actions';

@Component({
    selector: 'app-machines-list',
    templateUrl: './machines-list.component.html',
    styleUrls: ['./machines-list.component.scss']
})
export class MachinesListComponent implements OnInit, OnDestroy {

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    columns: string[] = ['status', 'machine_type', 'longitude', 'latitude', 'last_maintenance', 'install_date', 'floor'];
    dataSource = new MatTableDataSource<Machine>();
    subscription: Subscription;

    constructor(private store: Store<AppState>, private router: Router, private socketService: SocketService) {
    }

    gotoMachine(machine: Machine) {
        this.router.navigate(['/machines', machine.id]);
    }

    ngOnInit() {
        this.socketService.join<Event>('events', 'new');
        this.store.dispatch(MachinesActions.getMachines());
        this.subscription = combineLatest([this.store.pipe(select(selectMachines)), this.socketService.subject.asObservable()])
            .pipe(
                map(data => {
                    const machines: Machine[] = data[0];
                    const event: Event = data[1];
                    if (event) {
                        machines.flatMap(machine => {
                            if (machine.id === event.machine_id) {
                                machine.status = event.status;
                            }
                            return machine;
                        });
                    }
                    return machines;
                })
            )
            .subscribe(machines => {
                this.dataSource.data = machines;
                this.dataSource.paginator = this.paginator;
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
