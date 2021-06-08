import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-allergens-panel-item',
  templateUrl: './allergens-panel-item.component.html',
  styleUrls: ['./allergens-panel-item.component.scss']
})
export class AllergensPanelItemComponent implements OnInit {
  @Input() allergen: string;

  @ViewChild('allergenInfo') allergenInfo: any;
  @ViewChild('allergenInfoTriggerer') allergenInfoTriggerer: any;

  public allergenName: string;
  private popoverHideDelay = 250;
  private allergensInfoPopoverTimeout: any;

  constructor(
    private translateService: TranslateService,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.translateService
      .get(`allergens.${this.allergen}`)
      .subscribe(allergenName => (this.allergenName = allergenName));
  }

  delayPopoverClose(): void {
    this.logger.trace(`[AllergensPanelItemComponent] - delayPopoverClose`);
    this.allergensInfoPopoverTimeout = setTimeout(() => {
      this.allergenInfoTriggerer.nativeElement.dispatchEvent(
        this.generateMouseEvent('click')
      );
    }, this.popoverHideDelay);
  }

  cancelPopoverClose(): void {
    this.logger.trace(`[AllergensPanelItemComponent] - cancelPopoverClose`);
    clearTimeout(this.allergensInfoPopoverTimeout);
  }

  onAllergenInfoTriggererMouseEnter(e): void {
    this.logger.trace(
      `[AllergensPanelItemComponent] - onAllergenInfoTriggererMouseEnter`
    );
    clearTimeout(this.allergensInfoPopoverTimeout);

    this.allergenInfoTriggerer.nativeElement.dispatchEvent(
      this.generateMouseEvent('click')
    );
  }

  generateMouseEvent(eventName) {
    this.logger.trace(`[AllergensPanelItemComponent] - generateMouseEvent`);
    let event;

    if (document.createEvent) {
      // Only for IE and Firefox
      event = document.createEvent('MouseEvent');
      event.initMouseEvent(
        eventName,
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        undefined
      );
    } else {
      // For Chrome
      event = new MouseEvent(eventName, { bubbles: false });
    }

    return event;
  }
}
