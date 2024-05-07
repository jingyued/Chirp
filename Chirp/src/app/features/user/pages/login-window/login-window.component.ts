import { Component } from '@angular/core';
import { RegisterWindowComponent } from '../register-window/register-window.component';
import { DialogCommunicationService } from '../../../../shared/services/dialog-communication.service';
import { Observable, catchError, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OpenPopUpService } from 'src/app/shared/services/open-pop-up.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.sass']
})
export class LoginWindowComponent {

  loginForm: any;

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder,
    private auth: AuthService,
    private popup: OpenPopUpService
  ) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, this.emailExistsValidator()],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }, {})
  }

  onSubmit() {
    this.auth.loginAuth(this.emailControl.value, this.passwordControl.value);
    this.onClosePopupDialog();
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }


  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.auth.checkExistByEmail(control.value).pipe(
        map((emailExist) => {
          return emailExist ? null : { userNotFound: 'Email address not found' }
        }, catchError(() => {
          return of(null);
        }))
      )
    }
  }

  openRegisterPopup() {
    this.onClosePopupDialog();
    this.popup.openPopUp(RegisterWindowComponent);
  }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }


}
