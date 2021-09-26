import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {CoreServiceModule} from './core/core-service.module';
import {MachinesServiceModule} from './machines/machines-service.module';
import {MachinesEffects} from './machines/effects/machines.effects';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './app.reducers';
import {StoreRouterConnectingModule, DefaultRouterStateSerializer} from '@ngrx/router-store';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from './http-loader.factory';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreServiceModule,
        MachinesServiceModule,
        StoreModule.forRoot(appReducers, {
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        EffectsModule.forRoot([MachinesEffects]),
        StoreRouterConnectingModule.forRoot({serializer: DefaultRouterStateSerializer, stateKey: 'routerState'}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}


