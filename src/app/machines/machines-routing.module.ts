import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from '../core/components/main/main.component';
import {MachinesComponent} from './components/machines/machines.component';
import {MachinesListComponent} from './components/machines-list/machines-list.component';
import {MachineDetailsComponent} from './components/machine-details/machine-details.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [], // Guard placeholder
        children: [
            {
                path: '', component: MachinesComponent,
                children: [
                    {path: '', component: MachinesListComponent},
                    {path: ':id', component: MachineDetailsComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MachinesRoutingModule {
}
