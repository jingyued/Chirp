import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterWindowComponent } from '../register-window/register-window.component';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.sass']
})
export class LoginWindowComponent implements OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  loginForm: any;

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }


  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required, this.emailExists()],
      password: ['', [Validators.required, Validators.minLength(8)]],
    }, {})
  }

  emailExists(): AsyncValidatorFn {
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

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openRegisterPopup(event: Event) {
    event.preventDefault();

    try {
      this.ref = this.dialogService.open(RegisterWindowComponent, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "max-height": "600px",
          "overflow": "auto",
          "border-radius": "25px" // Optional: Add border-radius for rounded corners
        }
      });

      this.dialogCommunicationService.registrationSuccess$.subscribe(() => {
        this.closeDialog();
      })
    } catch (error) {
      console.error('Error opening dialog:', error);
    }
  }

  closeDialog() {
    if (this.ref) {
      this.ref.close();
    }
  }

  onSubmit() {
    //post
    this.auth.loginAuth(this.emailControl.value, this.passwordControl.value);
  }
}
