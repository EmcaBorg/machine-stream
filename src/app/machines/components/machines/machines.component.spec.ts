import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MachinesComponent} from './machines.component';
import {CoreDomainModule} from '../../../core/core-domain.module';
import {MaterialModule} from '../../../external/material.module';
import {MachinesServiceModule} from '../../machines-service.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from '../../../app.reducers';
import {MachinesEffects} from '../../effects/machines.effects';
import {CoreServiceModule} from '../../../core/core-service.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('MachinesComponent', () => {
    let component: MachinesComponent;
    let fixture: ComponentFixture<MachinesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreDomainModule,
                CoreServiceModule,
                MaterialModule,
                MachinesServiceModule,
                RouterTestingModule,
                StoreModule.forRoot(appReducers),
                EffectsModule.forRoot([MachinesEffects])],
            declarations: [MachinesComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MachinesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
