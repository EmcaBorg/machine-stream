import {NgModule} from '@angular/core';
import {CoreDomainModule} from '../core/core-domain.module';
import {MachinesRoutingModule} from './machines-routing.module';
import {MachinesComponent} from './components/machines/machines.component';
import {MachinesDomainModule} from './machines-domain.module';

@NgModule({
    imports: [
        CoreDomainModule,
        MachinesRoutingModule,
        MachinesDomainModule
    ],
    declarations: [
        MachinesComponent
    ]
})
export class MachinesRoutedModule {
}
