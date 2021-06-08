import { NGXLogger } from 'ngx-logger';

export class AppForm {
  public focusControl: any;

  constructor(protected logger: NGXLogger) {
    this.focusControl = {};
  }

  public inputFocus(event): void {
    this.focusControl[event.target.name] = true;
  }

  public inputBlur(event): void {
    setTimeout(() => {
      this.focusControl[event.target.name] = false;
    }, 125);
  }

  public inputHasFocus(name: string): boolean {
    return this.focusControl[name];
  }

  public clearInput(input): void {
    input.markAsPristine();
    input.reset();
  }

  public statusClasses(input, name) {
    // this.logger.trace(`[AppForm] - statusClasses [${input} - ${name}]`);
    return {
      'has-focus': this.inputHasFocus(name),
      'is-invalid': input.invalid,
      'is-touched': (input.dirty || input.touched)
    };
  }

  public showDivErrors(form): boolean {
    if (form.touched && form.invalid) {
      const controls = form.controls;
      for (const k in form.controls) {
        if (form.controls[k] && k !== 'checkConditions') {
          const control = form.controls[k];
          if (control.touched && control.invalid && !this.inputHasFocus(k)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  public showMessageError(key, typeError, name): boolean {
    if (key.hasError(typeError) && key.touched && !this.inputHasFocus(name)) {
      return true;
    }
  }
}
