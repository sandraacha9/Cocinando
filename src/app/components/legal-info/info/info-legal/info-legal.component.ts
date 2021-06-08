import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-info-legal',
  templateUrl: './info-legal.component.html',
  styleUrls: ['./info-legal.component.scss']
})
export class InfoLegalComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private logger: NGXLogger,
    private element: ElementRef,
    private cookieService: CookieService
  ) {}

  gotoSection(section: string) {
    this.logger.trace('[InfoLegal] gotoSection');
    this.router.navigate(['/info-legal'], { fragment: section });
  }

  cookieOwner(): string {
    return window.location.hostname;
  }

  public infoAccepted(): boolean {
    const acceptCookiesPolicyCookieName = 'cookiesAccepted';
    const acceptCookiesPolicyCookieValue = '1';

    return (
      this.cookieService.get(acceptCookiesPolicyCookieName) ===
      acceptCookiesPolicyCookieValue
    );
  }

  ngOnInit() {
  }
}
