import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MachineDetailsComponent} from './machine-details.component';
import {CoreDomainModule} from '../../../core/core-domain.module';
import {MaterialModule} from '../../../external/material.module';
import {MomentModule} from 'ngx-moment';
import {MachinesServiceModule} from '../../machines-service.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from '../../../app.reducers';
import {MachinesEffects} from '../../effects/machines.effects';
import {CoreServiceModule} from '../../../core/core-service.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('MachineDetailsComponent', () => {
    let component: MachineDetailsComponent;
    let fixture: ComponentFixture<MachineDetailsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MomentModule,
                CoreDomainModule,
                CoreServiceModule,
                MaterialModule,
                MachinesServiceModule,
                RouterTestingModule,
                StoreModule.forRoot(appReducers),
                EffectsModule.forRoot([MachinesEffects])],
            declarations: [MachineDetailsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MachineDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have list elements', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.mat-list-item').length).toBeGreaterThan(0);
    });

});


