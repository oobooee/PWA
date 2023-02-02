import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
    }]
})
export class EmailValidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return CustomValidators.email(control);
  }


}
