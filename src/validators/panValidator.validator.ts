import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function panValidator():ValidatorFn
{
    const regex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
    return (control: AbstractControl): { [key: string]: any } | null =>
    {
        if(regex.test(control.value)==false)
        return {"":false}
        else
        return null;
    } 

} 
