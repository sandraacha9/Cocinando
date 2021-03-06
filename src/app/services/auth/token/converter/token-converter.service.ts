import { Injectable } from '@angular/core';

import { NGXLogger } from 'ngx-logger';
import { TokenDTO } from '../model/token-dto.model';
import { TokenVO } from '../../../../model/auth/token/token-vo.model';
import { APP_CONSTANST } from '../../../../core/constants/app.constants';

@Injectable()
export class TokenConverterService {
  constructor(
    private logger: NGXLogger
  ) {}

  convertToVO(response: TokenDTO): TokenVO {
    const result: TokenVO = new TokenVO(
      null,
      "eyJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJza3lzaG9wLXVzZXIiLCJhenAiOiJza3lzaG9wLXVzZXIiLCJzY29wZSI6WyJmbGlnaHQiLCJza3lzaG9wIiwicHJpY2luZyIsIm9mZmxpbmVfYWNjZXNzIl0sImlzcyI6Imh0dHA6XC9cL3ByZWlsLmFpcmV1cm9wYS5jb21cL29wZW5pZC1zZXJ2ZXIiLCJleHAiOjE1MTk2MzcyMDksImlhdCI6MTUxOTYzMDAwOSwiYXV0aG9yaXRpZXMiOltdLCJqdGkiOiI1ODhkNDlkMi1lYTRiLTQyMDMtOGZlNi0yNGIzNWE5YjUzNjUifQ.pGNpmPSZqHuJbkCe34Cyh1nwXdLraPBorjXiP0FPJ41yne5iwLNq3o0JK66pKStCg53TwbXLIm2S1xOxn5aEB-NM_XoESe6JnmvuRjTtp6xNLgGESZdkRMx2bmgNylc1Njg92b_wrMWkcINJEpSlXYA1ya0GSG7fqd4ruRW4mAf9h6NlpBm-evA8wSyzJgHCtlR6YpKKr-1pIz8-iqHRHJ9dZUnVbkkwhBuKlgIeR94u9G9r--PK4LyTAjUAdTpgVoyTB_2Ef_fxWub44hAa6NXFDciWozeljO4nKh136nkwJE8sySjozAdxh2KdrEVO6I7wGKiTmmB1oucs5H7-0Q",
      APP_CONSTANST.TOKEN_TYPES.PUBLIC
    );
    return result;
  }
}
