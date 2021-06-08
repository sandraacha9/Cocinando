import { NgModule } from '@angular/core';
import { PlaceholderDirective } from './custom-placeholder.directive';

@NgModule({
  exports: [
    PlaceholderDirective
  ],
  declarations: [
    PlaceholderDirective
  ],
  providers: []
})
export class DirectivesModule {}
