import { Component } from '@angular/core';
import { DialogCommunicationService } from '../../../../shared/services/dialog-communication.service';
import { AbstractControl, AsyncValidatorFn, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-register-window',
  templateUrl: './register-window.component.html',
  styleUrls: ['./register-window.component.sass']
})
export class RegisterWindowComponent {

  registerForm: any;

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: ['',Validators.required, this.userNameNotExists()],
      email: ['',[Validators.required, Validators.email], this.emailNotExistsValidator()],
      password: ['',[Validators.required, Validators.minLength(8), this.passwordValidator()]],
      passwordConfirm: ['', [Validators.required, this.passwordMatchValidator('password')]]

    },{})
  }

  get usernameControl() {
    return this.registerForm.get('username');
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }

  get emailControl() {
    return this.registerForm.get('email');
  }

  get passwordConfirmControl() {
    return this.registerForm.get('passwordConfirm');
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password: string = control.value;
      if (!password) {
        return null; 
      }
  
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  
      const hasUppercase = uppercaseRegex.test(password);
      const hasLowercase = lowercaseRegex.test(password);
      const hasSpecialChar = specialCharRegex.test(password);
  
      return !hasUppercase || !hasLowercase || !hasSpecialChar ? { 'invalidPassword': true } : null;
    };
  }

  passwordMatchValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value;
      const confirmPassword = control.parent?.get(controlName)?.value;
  
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    };
  }

  emailNotExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.auth.checkExistByEmail(control.value).pipe(
        map((emailExist) => {
          return emailExist ? { emailAlreadyExist: 'Email address already exist' } : null
        }, catchError(() => {
          return of({ StatusError: 'Service not avaliable' });
        }))
      )
    }
  }

  userNameNotExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.auth.checkExistByName(control.value).pipe(
        map((nameExist) => {
          return nameExist ? { userAlreadyExist: 'userName already exist' } : null
        }, catchError(() => {
          return of({ StatusError: 'Service not avaliable' });
        }))
      )
    }
  }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }

  onSubmit() {
    // post
    this.auth.registerUser({userName: this.usernameControl.value, userEmail: this.emailControl.value, password: this.passwordControl.value});
    this.onClosePopupDialog();
  }

}

