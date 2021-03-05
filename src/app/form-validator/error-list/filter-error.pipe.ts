import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterError'
})
export class FilterErrorPipe implements PipeTransform {

    transform(errors: Error[], input: string): any {
        if (input && input != "") {
            return errors.filter(e => e.name.startsWith(input));
        } else {
            return errors;
        }
    }

}