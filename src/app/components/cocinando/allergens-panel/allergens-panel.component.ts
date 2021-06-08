import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { APP_ALLERGEN_PANEL } from './allergens-panel.constants';
import { AllergensVO } from '../../../model/product/allergens/allergens-vo.model';

// "soy": "Soja",
// "fish": "Pescado",
// "mustard": "Mostaza",
// "molluscs": "Moluscos",
// "dairyProducts": "Lácteos",
// "egg": "Huevo",
// "sesameSeeds": "Granos de Sésamo",
// "gluten": "Gluten",
// "shellFruits": "Frutos de Cáscara",
// "sulfurDioxideSulfites": "Dioxido de Azufre y Sulfitos",
// "crustacean": "Crustaceo",
// "peanut": "Cacahuete",
// "celery": "Apio",
// "lupins": "Altramuces"

@Component({
  selector: 'app-allergens-panel',
  templateUrl: './allergens-panel.component.html',
  styleUrls: ['./allergens-panel.component.scss']
})
export class AllergensPanelComponent implements OnInit {
  @HostBinding('class.app-allergens-panel-menu-detail-layout')
  menuDetailLayout: boolean;
  @HostBinding('class.app-allergens-panel-popover-layout')
  popoverLayout: boolean;

  @Input('layout') layout: any;
  @Input('allergens') allergens: Array<AllergensVO>;

  constructor() {}

  ngOnInit(): void {
    this.menuDetailLayout =
      this.layout === APP_ALLERGEN_PANEL.LAYOUTS.MENU_DETAIL;
    this.popoverLayout = this.layout === APP_ALLERGEN_PANEL.LAYOUTS.POPOVER;
  }

  allergenFn(index, item) {
    return index;
  }
}
