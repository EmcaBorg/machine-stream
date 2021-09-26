import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
    {path: '', redirectTo: '/machines', pathMatch: 'full'},
    {
        path: 'machines',
        loadChildren: () => import('./machines/machines-routed.module').then(mod => mod.MachinesRoutedModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
