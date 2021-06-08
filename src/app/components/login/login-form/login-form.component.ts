import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { HttpErrorHandlerService } from '../../../core/services/http-error-handler/http-error-handler.service';
import { LoginVO } from '../../../model/login/login-vo.model';
import { AppService } from './../../../core/services/app/app.service';
import { TokenService } from './../../../core/services/token/token.service';
import { LoginResponseVO } from './../../../model/login/login-response-vo.model';
import { AppForm } from './../../abstracts/form.class';
import { LoginValidators } from './validators/login.validator';
import { LoginService } from '../../../core/services/login/login.service';
import { CustomerService } from '../../../core/services/customer/customer.service';
import { AppModalsService } from '../../../services/app-modals/app-modals.service';
import { CustomModalMessageVO } from '../../../model/messages/custom-modal-message-vo.model';
import { OrderCartService } from '../../../core/services/order-cart/order-cart.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends AppForm
  implements OnInit, AfterViewInit {
  public login: LoginVO;
  public loginForm: FormGroup;
  public noFocus: boolean;

  public autofilled: boolean;

  @ViewChild('logo') logo: any;
  @ViewChild('inputTicket') inputTicket: ElementRef;

  constructor(
    private router: Router,
    protected logger: NGXLogger,
    public formBuilder: FormBuilder,
    public appService: AppService,
    private httpErrorHandlerService: HttpErrorHandlerService,
    private tokenService: TokenService,
    public loginService: LoginService,
    private customerService: CustomerService,
    private appModalsService: AppModalsService,
    private orderCart: OrderCartService
  ) {
    super(logger);
    this.login = new LoginVO();
    this.focusControl = {};
    this.noFocus = false;
  }

  ngOnInit(): void {
    this.buildForm();
    this.autofilled = false;
  }

  ngAfterViewInit(): void {
    this.updateAutofilled(1500);
  }

  updateAutofilled(delay, forceToFalse?): void {
    if (forceToFalse === true) {
      this.autofilled = false;
    } else {
      setTimeout(() => {
        const checkStyleProperty = 'z-index';
        const autofillValue = '1';

        const styleName = window.getComputedStyle(
          this.inputTicket.nativeElement,
          ':-webkit-autofill'
        );

        this.autofilled =
          styleName.getPropertyValue(checkStyleProperty) === autofillValue
      }, delay);
    }
  }

  buildForm(): void {
    const controls = this.initializeControls();
    this.loginForm = this.formBuilder.group(controls);
  }

  initializeControls(): any {
    const controls = {
      ticket: [
        this.login.ticket,
        [Validators.required, LoginValidators.ticket]
      ]
    };

    return controls;
  }

  get ticket(): AbstractControl {
    return this.loginForm.get('ticket');
  }

  doLogin(): void {
    this.loginService.doLogin(
      this.login,
      response => this.doLoginSuccess(response),
      error => this.httpErrorHandlerService.handler(error)
    );
  }

  doLoginSuccess(response: LoginResponseVO): void {
    this.logger.info(`[LoginFormComponent] - doLoginSuccess`);
    this.tokenService.saveToken(response);
    this.appService.setAsRegistered();
    this.createNewOrder(this.login);
    //this.orderCart.setOrderId(1);
    this.loginForm.reset();
    this.noFocus = true;
    this.router.navigate(['./cocinando']);
  }

  createNewOrder(login: LoginVO) {
    this.orderCart.createNewOrder(login).subscribe(
      response => {
        this.orderCart.setOrderId(response);
      },
      error => {
        this.httpErrorHandlerService.handler(error);
      }
    );
  }

  releaseFocus(input): void {
    this.logo.nativeElement.focus();
    this.clearInput(input);
  }

  noFocusTabIndex(): number {
    if (this.noFocus) {
      return -1;
    } else {
      return 0;
    }
  }

  clearInput(input): void {
    super.clearInput(input);
    this.updateAutofilled(0, true);
  }

  continueAsPublic() {
    this.appService.setAsPublic();
    this.customerService.setTemporalCustomer(null);
    this.clearInput(this.ticket);
    this.router.navigate(['./cocinando']);
    this.noFocus = true;
  }

  privateLogin(): void {
    // redirects to private module
    this.clearInput(this.ticket);
    this.noFocus = true;
    // Open Modal
    this.appModalsService.openPrivate();
  }
}
