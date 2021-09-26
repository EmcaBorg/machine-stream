import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
})
export class MainComponent implements OnInit, OnDestroy {

    display: boolean;

    constructor() {
    }

    ngOnInit() {
        this.display = true;
    }

    ngOnDestroy() {
    }

}
