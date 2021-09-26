import {NgModule} from '@angular/core';
import {CoreDomainModule} from '../core/core-domain.module';
import {MaterialModule} from '../external/material.module';
import {MachinesListComponent} from './components/machines-list/machines-list.component';
import {MachineDetailsComponent} from './components/machine-details/machine-details.component';
import {MomentModule} from 'ngx-moment';

@NgModule({
    declarations: [
        MachinesListComponent,
        MachineDetailsComponent
    ],
    imports: [
        MomentModule,
        CoreDomainModule,
        MaterialModule
    ],
    exports: [
        MachinesListComponent,
        MachineDetailsComponent
    ]
})
export class MachinesDomainModule {
}
