import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[mousedown-stop-propagation]'
})
export class MousedownStopPropagationDirective {


    @HostListener("mousedown", ["$event"])
    public onSelect(event: any): void {
        event.stopPropagation();
    }
    constructor() { }

}