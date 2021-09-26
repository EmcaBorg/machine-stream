import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {MachinesListComponent} from './machines-list.component';
import {CoreDomainModule} from '../../../core/core-domain.module';
import {MaterialModule} from '../../../external/material.module';
import {MachinesServiceModule} from '../../machines-service.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {appReducers} from '../../../app.reducers';
import {MachinesEffects} from '../../effects/machines.effects';
import {CoreServiceModule} from '../../../core/core-service.module';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateStore} from '@ngx-translate/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MachinesService} from '../../services/machines.service';
import {IResponseBody} from '../../../core/base/api.interface';
import {of} from 'rxjs';
import {DATA_FAKE_RESPONSE} from '../../constants/constants';
import {Machine} from '../../models/machine.model';

describe('MachinesListComponent', () => {
    let component: MachinesListComponent;
    let fixture: ComponentFixture<MachinesListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                CoreDomainModule,
                CoreServiceModule,
                MaterialModule,
                MachinesServiceModule,
                StoreModule.forRoot(appReducers),
                EffectsModule.forRoot([MachinesEffects]),
                RouterTestingModule,
                NoopAnimationsModule
            ],
            declarations: [MachinesListComponent],
            providers: [TranslateStore]
        })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(MachinesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return data', (done) => {
        const machinesService = fixture.debugElement.injector.get(MachinesService);
        spyOn(machinesService, 'getMachineById').and.returnValue(of(DATA_FAKE_RESPONSE));
        machinesService.getMachineById('15c14416-caa2-46da-a435-1c6a01e7e47f').subscribe((responseBody: IResponseBody<Machine>) => {
            expect(responseBody).toBe(DATA_FAKE_RESPONSE);
            done();
        });
    });

});
