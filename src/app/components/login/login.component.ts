import { Component, OnInit } from '@angular/core';
import { AppService } from '../../core/services/app/app.service';
import { TokenService } from '../../core/services/token/token.service';
import { NGXLogger } from 'ngx-logger';
import { TokenStorageService } from '../../core/services/storage/token/token-storage.service';
import { TokenVO } from '../../model/auth/token/token-vo.model';
import { APP_CONSTANST } from '../../core/constants/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoadPage = false;

  constructor(
    private appService: AppService,
    private tokenService: TokenService,
    private tokenStorageService: TokenStorageService,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.tokenService.onTokenChange.subscribe(_ => this.loadPage());
    this.tokenService.onGetTokenError.subscribe(_ => this.loadPage());
    
    const token: TokenVO = new TokenVO(null, "eyJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJza3lzaG9wLXVzZXIiLCJhenAiOiJza3lzaG9wLXVzZXIiLCJzY29wZSI6WyJmbGlnaHQiLCJza3lzaG9wIiwicHJpY2luZyIsIm9mZmxpbmVfYWNjZXNzIl0sImlzcyI6Imh0dHA6XC9cL3ByZWlsLmFpcmV1cm9wYS5jb21cL29wZW5pZC1zZXJ2ZXIiLCJleHAiOjE1MTk2MzcyMDksImlhdCI6MTUxOTYzMDAwOSwiYXV0aG9yaXRpZXMiOltdLCJqdGkiOiI1ODhkNDlkMi1lYTRiLTQyMDMtOGZlNi0yNGIzNWE5YjUzNjUifQ.pGNpmPSZqHuJbkCe34Cyh1nwXdLraPBorjXiP0FPJ41yne5iwLNq3o0JK66pKStCg53TwbXLIm2S1xOxn5aEB-NM_XoESe6JnmvuRjTtp6xNLgGESZdkRMx2bmgNylc1Njg92b_wrMWkcINJEpSlXYA1ya0GSG7fqd4ruRW4mAf9h6NlpBm-evA8wSyzJgHCtlR6YpKKr-1pIz8-iqHRHJ9dZUnVbkkwhBuKlgIeR94u9G9r--PK4LyTAjUAdTpgVoyTB_2Ef_fxWub44hAa6NXFDciWozeljO4nKh136nkwJE8sySjozAdxh2KdrEVO6I7wGKiTmmB1oucs5H7-0Q", APP_CONSTANST.TOKEN_TYPES.PUBLIC);
    this.tokenStorageService.saveToken(token);
    this.loadPage();
  }

  loadPage(): void {
    this.isLoadPage = true;
  }
}
