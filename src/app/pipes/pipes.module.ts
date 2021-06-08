import { NgModule } from '@angular/core';
import { LimpiarAcentosPipe } from './limpiarAcentos.pipe';
@NgModule({
  exports: [LimpiarAcentosPipe],
  declarations: [
    LimpiarAcentosPipe
  ],
  providers: []
})
export class PipesModule {}
