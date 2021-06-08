import { Directive, ElementRef, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Directive({
  selector: '[appCustomPlaceholder]'
})
export class PlaceholderDirective {
  constructor(
    private el: ElementRef,
    private control: NgControl,
    private logger: NGXLogger
  ) {}
  @Input('customPlaceholder')
  public set defineInputType(pattern: string) {
    this.logger.trace(
      `[PlaceholderDirective] - defineInputType [${this.control.name}]`
    );
    this.logger.trace(`[PlaceholderDirective] - pattern [${pattern}]`);

    this.el.nativeElement.placeholder = pattern;
    const control = this.control.control;
    setTimeout(() => {
      control.markAsPristine();
    }, 0);
  }
}
