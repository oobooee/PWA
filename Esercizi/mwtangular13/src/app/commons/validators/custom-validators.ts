import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

    public static email(control: AbstractControl): ValidationErrors {
        const EMAIL_REGEXP =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        console.log(`Email digitata: ${control.value}`);
        const error = !EMAIL_REGEXP.test(control.value);
        return error
          ? { emailFormatError: { valid: false, value: control.value } }
          : {};
      }

      public static isbn(control: AbstractControl): ValidationErrors {
        let codISBN = control.value;
        const COD_ISBN_REGEXP = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
    
        console.log(`Codice ISBN digitato: ${codISBN}`);
        const error = !COD_ISBN_REGEXP.test(codISBN);
        return error
          ? { codISBNFormatError: { valid: false, value: codISBN } }
          : {};
      }
}