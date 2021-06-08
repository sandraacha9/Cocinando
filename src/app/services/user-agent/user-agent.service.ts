import { Host, Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class UserAgentService {
  userAgent: string;
  browser: string;
  isFirefox: boolean;
  isEdge: boolean;
  isIE: boolean;
  isChrome: boolean;
  isOpera: boolean;

  chromeClassName = 'user-agent-chrome';
  firefoxClassName = 'user-agent-firefox';
  edgeClassName = 'user-agent-edge';
  ieClassName = 'user-agent-ie';
  operaClassName = 'user-agent-opera';

  private hasText = (s, t):  boolean => {
    return s.indexOf(t) > -1;
  }

  constructor(private logger: NGXLogger) {
    this.userAgent = window.navigator.userAgent;
    this.logger.trace(`[UserAgentService] - constructor [${this.userAgent}]`);
    this.logger.trace(`[UserAgentService] - css_browser_selector [${this.css_browser_selector(this.userAgent)}]`);
    this.browser = this.css_browser_selector(this.userAgent);

    this.isFirefox = this.hasText(this.browser, 'firefox');
    this.isEdge = this.hasText(this.browser, 'edge');
    this.isIE = this.hasText(this.browser, 'ie');
    this.isChrome = this.hasText(this.browser, 'chrome');
    this.isOpera = this.hasText(this.browser, 'opera');
  }

  // tslint:disable-next-line:cyclomatic-complexity
  private css_browser_selector = u => {
    // tslint:disable-next-line:one-variable-per-declaration
    const ua = u.toLowerCase(),
      is = t => {
        return ua.indexOf(t) > -1;
      },
      g = 'gecko',
      w = 'webkit',
      s = 'safari',
      c = 'chrome',
      o = 'opera',
      m = 'mobile',
      r = window.devicePixelRatio ? (`${window.devicePixelRatio}`).replace('.', '_') : '1';
    let v = 0;
    const res = [
      /* IE */
      (!(/opera|webtv/.test(ua)) && /msie\s(\d+)/.test(ua) && (v = parseInt(RegExp.$1, 10) * 1)) ?
        // tslint:disable-next-line:prefer-template
        ('ie ie' + v + ((v === 6 || v === 7) ?
          ' ie67 ie678 ie6789' : (v === 8) ?
          ' ie678 ie6789' : (v === 9) ?
          ' ie6789 ie9m' : (v > 9) ?
          ' ie9m' : '')) :
        /* EDGE */
        (/edge\/(\d+)\.(\d+)/.test(ua)) ?
        'edge' :
          /* IE 11 */
          (/trident\/\d+.*?;\s*rv:(\d+)\.(\d+)\)/.test(ua)) ?
            'ie iev ie9m' :
            /* FF */
            (/firefox\/(\d+)\.(\d+)/.test(ua)) ?
            `${g} firefox` :
              is('gecko/') ? g :
                /* Opera - old */
                // tslint:disable-next-line:prefer-template
                is(o) ? 'old' + o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 :
                  (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) :
                  /* K */
                  is('konqueror') ? 'konqueror' :
                    /* Black Berry */
                    is('blackberry') ? `${m} blackberry` :
                      /* Chrome */
                      (is(c) || is('crios')) ? `${w} ${c}` :
                        /* Iron */
                          is('iron') ? `${w} iron` :
                            /* Safari */
                            !is('cpu os') && is('applewebkit/') ? `${w} ${s}` :
                              /* Mozilla */
                              is('mozilla/') ? g : '',
      /* Android */
      is('android') ? `${m} android` : '',
      /* Tablet */
      is('tablet') ? 'tablet' : '',
      /* blink or webkit engine browsers */
        /* Opera */
        is('opr/') ? o : '',
        /* Yandex */
        is('yabrowser') ? 'yandex' : '',
      /* Machine */
      is('j2me') ? `${m} j2me` :
        is('ipad; u; cpu os') ? `${m} chrome android tablet` :
          is('ipad;u;cpu os') ? `${m} chromedef android tablet` :
            is('iphone') ? `${m} ios iphone` :
              is('ipod') ? `${m} ios ipod` :
                is('ipad') ? `${m} ios ipad tablet` :
                  is('mac') ? 'mac' :
                    is('darwin') ? 'mac' :
                      is('webtv') ? 'webtv' :
                        // tslint:disable-next-line:prefer-template
                        is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') :
                          is('freebsd') ? 'freebsd' :
                            (is('x11') || is('linux')) ? 'linux' : '',
      /* Ratio (Retina) */
      (r !== '1') ? ` retina ratio ${r}` : '',
      'js portrait'].join(' ');

    return res;
  }

  public userAgentClass() {
    let className = '';
    className = className + (this.isChrome ? this.chromeClassName : '');
    className = className + (this.isFirefox ? this.firefoxClassName : '');
    className = className + (this.isEdge ? this.edgeClassName : '');
    className = className + (this.isIE ? this.ieClassName : '');
    className = className + (this.isOpera ? this.operaClassName : '');

    return className;
  }
}
