import { AbstractControl } from '@angular/forms/src/model';
import { CustomValidator } from '../../../../core/validators/custom-regexp';

export class LoginValidators {
  static ticket = (control: AbstractControl): { [key: string]: any } => {
    const val = control.value ? control.value : '';
    if (val === '') {
      return undefined;
    }

    const validTicket = CustomValidator.checkTicket(val);

    return validTicket ? undefined : { invalid: true };
  }
}
