import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'title'})
export class TitlePipe implements PipeTransform {

    constructor() {
    }

    transform(value): string {
        return value
            .split(/(?=[A-Z])/).toString().replace(/,/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
    }
}
