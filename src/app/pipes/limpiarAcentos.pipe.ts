import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';

@Pipe({ name: 'limpiarAcentos' })
export class LimpiarAcentosPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer, private logger: NGXLogger) {}
  transform(source): string {
    const inputValue = source;

    const accent = [
      /[\300-\306]/g,
      /[\340-\346]/g, // A, a
      /[\310-\313]/g,
      /[\350-\353]/g, // E, e
      /[\314-\317]/g,
      /[\354-\357]/g, // I, i
      /[\322-\330]/g,
      /[\362-\370]/g, // O, o
      /[\331-\334]/g,
      /[\371-\374]/g, // U, u
      /[\321]/g,
      /[\361]/g, // N, n
      /[\307]/g,
      /[\347]/g // C, c
    ];
    const noaccent = [
      'A',
      'a',
      'E',
      'e',
      'I',
      'i',
      'O',
      'o',
      'U',
      'u',
      'N',
      'n',
      'C',
      'c'
    ];

    for (let i = 0; i < accent.length; i++) {
      source = source.replace(accent[i], noaccent[i]);
    }
    const outputValue = source;
    this.logger.trace(
      `[LimpiarAcentosPipe] - transform [${inputValue} -> ${outputValue}]`
    );

    return source;
  }
}
