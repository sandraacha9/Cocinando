import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../core/shared.module';
import { PrivateZoneDetailsComponent } from './private-zone-details/private-zone-details.component';
import { PrivateZoneDetailsItemComponent } from './private-zone-details/private-zone-details-item/private-zone-details-item.component';
import { PrivateZoneListComponent } from './private-zone-list/private-zone-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [PrivateZoneDetailsComponent, PrivateZoneDetailsItemComponent, PrivateZoneListComponent],
  exports: [PrivateZoneDetailsComponent, PrivateZoneDetailsItemComponent, PrivateZoneListComponent]
})
export class PrivateZoneModule { }
