import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';

@Directive({
  selector: '[appTextValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TextValidatorDirective,
    multi: true
    }]
})
export class TextValidatorDirective implements Validators{

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return CustomValidators.notempty(control);
  }
}
