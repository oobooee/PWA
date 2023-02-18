import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators{


    public static email(control: AbstractControl): ValidationErrors{
        const EMREGEXP=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        const error = !EMREGEXP.test(control.value);
        return error
        ? { emailFormatError:{valid:false, value: control.value}}
        :{};
    }

    public static notempty(control: AbstractControl): ValidationErrors{
        const TEXTREGEXP=/^[A-Za-z0-9].{5,25}$/
        const error = !TEXTREGEXP.test(control.value);
        return error
        ? { textFormatValidator:{valid:false, value: control.value}}
        :{};
    }

    public static totalempty(control: AbstractControl): ValidationErrors{
        const TEXTREGEXP=/^[A-Za-z0-9].{0,25}$/
        const error = !TEXTREGEXP.test(control.value);
        return error
        ? { textFormatValidator:{valid:false, value: control.value}}
        :{};
    }
    public static search(control: AbstractControl): ValidationErrors{
        const TEXTREGEXP=/^[A-Za-z0-9].{2,25}$/
        const error = !TEXTREGEXP.test(control.value);
        return error
        ? { textFormatValidator:{valid:false, value: control.value}}
        :{};
    }
}