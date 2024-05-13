import { Component } from '@angular/core';
import { RegisterWindowComponent } from '../register-window/register-window.component';
import { DialogCommunicationService } from '../../../../core/services/dialog-communication.service';
import { Observable, catchError, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { DialogControlService } from 'src/app/core/services/dialog-control.service';
import { Message, MessageService } from 'primeng/api';


@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.sass'],
  providers: [MessageService]
})
export class LoginWindowComponent {

  loginForm: any;

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder,
    private authService: AuthService,
    private dialogService: DialogControlService,
    private messageService: MessageService
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
    this.authService.loginAuth(this.emailControl.value, this.passwordControl.value)
    .subscribe(response => {
      if (response.success) {
        this.messageService.add({ severity: 'success', summary: 'Logged in successfully', detail: 'Welcome back, ' + response.userName + '!', life: 3000 });
        setTimeout(() => this.dialogCommunicationService.emitRegistrationSuccess(), 2000);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Login failed', detail: 'Please check your Internet connection!', life: 3000 });
      }
    });
  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }


  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authService.checkExistByEmail(control.value).pipe(
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
    this.dialogService.openPopUp(RegisterWindowComponent);
  }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }


}
