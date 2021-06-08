import { TokenService } from '../../core/services/token/token.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';
import { PrivateValidators } from './validators/private.validator';
import { AppForm } from '../abstracts/form.class';
import { AppService } from '../../core/services/app/app.service';
import { HttpErrorHandlerService } from '../../core/services/http-error-handler/http-error-handler.service';
import { PrivateVO } from '../../model/login/private-vo.model';
import { LoginResponseVO } from '../../model/login/login-response-vo.model';
import { LoginService } from '../../core/services/login/login.service';
import { CustomerService } from '../../core/services/customer/customer.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent extends AppForm
  implements OnInit {
  public private: PrivateVO;
  public privateForm: FormGroup;

  @Output('cancelEvent') cancelEvent = new EventEmitter();
  @Output('hideEvent') hideEvent = new EventEmitter();

  constructor(
    private appService: AppService,
    protected logger: NGXLogger,
    private tokenService: TokenService,
    private loginService: LoginService,
    private customerService: CustomerService,
    private router: Router,
    public formBuilder: FormBuilder,
    private httpErrorHandlerService: HttpErrorHandlerService,
  ) {
    super(logger);
    this.private = new PrivateVO();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    // initialize form controls
    const controls = this.initializeControls();
    this.privateForm = this.formBuilder.group(controls);
  }

  initializeControls() {
    const controls = {
      user: [
        this.private.user,
        [Validators.required]
      ],
      pass: [
        this.private.pass,
        [Validators.required, PrivateValidators.pass]
      ]
    };
    return controls;
  }

  get user() {
    return this.privateForm.get('user');
  }
  get pass() {
    return this.privateForm.get('pass');
  }

  doPrivate() {
    this.loginService.doPrivate(
      this.private,
      response => this.doPrivateSuccess(response),
      error => this.httpErrorHandlerService.handler(error)
    );
  }

  doPrivateSuccess(response: LoginResponseVO): void {
    this.logger.info(`[PrivateComponent] - doPrivateSuccess`);
    this.tokenService.saveToken(response);
    this.privateForm.reset();
    this.appService.setAsPrivate();
    this.customerService.loadCustomer();
    this.hideEvent.emit();
    this.router.navigate(['/cocinando/private-zone']);
  }

  cancel() {
    this.cancelEvent.emit();
  }
}
