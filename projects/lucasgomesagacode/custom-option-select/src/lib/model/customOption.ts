export class CustomOption {
    description: string = '';
    value: any;
    multiple: boolean;
    selected?: boolean;
    formControlName: string;
    invalid: boolean = false;

    constructor(multiple: boolean, description: string, value: any, formControlName: string) {
        this.multiple = multiple;
        this.description = description;
        this.value = value;
        this.formControlName = formControlName;
    }
}