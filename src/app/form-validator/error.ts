import { FormControl } from "@angular/forms";

export class Error {

    get message(): string {
        return this.name;
    }
    constructor(public name: string, public control: FormControl) { }
} 