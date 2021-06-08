import { AbstractControl } from '@angular/forms/src/model';
import { CustomValidator } from '../../../core/validators/custom-regexp';

export class PrivateValidators {
  static pass = (control: AbstractControl): { [key: string]: any } => {
    const val = control.value ? control.value : '';
    if (val === '') {
      return undefined;
    }

    const validPassword = CustomValidator.checkPassword(val);

    return validPassword ? undefined : { invalid: true };
  }
}
