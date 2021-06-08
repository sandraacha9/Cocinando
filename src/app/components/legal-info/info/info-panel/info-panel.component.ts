import { Component, OnInit, HostBinding } from '@angular/core';
import { CookieService, CookieOptions } from 'ngx-cookie';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {
  private acceptInfoLegalName: string;
  private acceptInfoLegalValue: string;

  @HostBinding('class.app-info-panel-accepted')
  infoAccepted: boolean;

  constructor(private cookieService: CookieService) {
    this.acceptInfoLegalName = 'infoLegalAccepted';
    this.acceptInfoLegalValue = '1';
  }

  public saveCookie(): void {
    const now = new Date();
    const expiresDate = new Date();
    expiresDate.setFullYear(now.getFullYear() + 1);

    const domain = window.location.hostname;

    let cookieOptions: CookieOptions = null;

    cookieOptions = Object.assign({}, {
      expires: expiresDate,
      path: '/'
    });

    if (domain !== 'localhost') {
      cookieOptions = Object.assign(cookieOptions, {
        domain: domain
      });
    }

    this.cookieService.put(
      this.acceptInfoLegalName,
      this.acceptInfoLegalValue,
      cookieOptions
    );
    this.checkCookie();
  }

  private checkCookie(): void {
    this.infoAccepted =
      this.cookieService.get(this.acceptInfoLegalName) ===
      this.acceptInfoLegalValue;
  }

  private cleanCookie(): void {
    this.cookieService.remove(this.acceptInfoLegalName);
  }

  ngOnInit(): void {
    this.checkCookie();
  }
}
