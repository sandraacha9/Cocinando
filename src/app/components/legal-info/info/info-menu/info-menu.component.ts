import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.scss']
})
export class InfoMenuComponent implements OnInit {

  public fragment: string;
  @Output('selectLinkEvent') selectLinkEvent = new EventEmitter();

  constructor
  (
    private route: ActivatedRoute,
    private logger: NGXLogger,
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.logger.trace('[LegalInfo] fragment: ' + fragment);
      this.fragment = fragment;
    });
  }

  fragmentIs(fragment: string): boolean {
    return this.fragment === fragment;
  }

  selectLink() {
    this.selectLinkEvent.emit();
  }

}
