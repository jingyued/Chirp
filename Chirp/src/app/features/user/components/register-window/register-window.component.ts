import { Component } from '@angular/core';
import { DialogCommunicationService } from '../../../../core/services/dialog-communication.service';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable, catchError, map, of } from 'rxjs';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-window',
  templateUrl: './register-window.component.html',
  styleUrls: ['./register-window.component.sass'],
  providers: [MessageService]
})
export class RegisterWindowComponent {

  registerForm: any;

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: ['',Validators.required, this.nameNotExistsValidator()],
      email: ['',[Validators.required, Validators.email], this.emailNotExistsValidator()],
      password: ['',[Validators.required, Validators.minLength(8), this.passwordValidator()]],
      passwordConfirm: ['', [Validators.required]]

    },{
      validators: [this.passwordMatchValidator()]
    })
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
  
      const uppercaseRegex: RegExp = /[A-Z]/;
      const lowercaseRegex: RegExp = /[a-z]/;
      const specialCharRegex: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  
      const hasUppercase: boolean = uppercaseRegex.test(password);
      const hasLowercase: boolean = lowercaseRegex.test(password);
      const hasSpecialChar: boolean = specialCharRegex.test(password);
  
      return !hasUppercase || !hasLowercase || !hasSpecialChar ? { 'invalidPassword': true } : null;
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const password: string = group.get('password')?.value;
      const confirmPassword: string = group.get('passwordConfirm')?.value;
      return password === confirmPassword ? null : { 'passwordMismatch': true };
    };
  }

  emailNotExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authService.checkExistByEmail(control.value).pipe(
        map((emailExist) => {
          return emailExist ? { emailAlreadyExist: 'Email address already exist' } : null
        }, catchError(() => {
          return of({ StatusError: 'Service not avaliable' });
        }))
      )
    }
  }

  nameNotExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.authService.checkExistByName(control.value).pipe(
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
    //this.authService.registerUser({userName: this.usernameControl.value, userEmail: this.emailControl.value, password: this.passwordControl.value});
    //this.onClosePopupDialog();
    this.authService.registerUser({userName: this.usernameControl.value, userEmail: this.emailControl.value, password: this.passwordControl.value})
    .subscribe(success => {
      if (success) {
        this.messageService.add({ severity: 'success', summary: 'Registered successfully', detail: 'Welcome, ' + this.usernameControl.value + '!', life: 2000 });
        setTimeout(() => this.onClosePopupDialog(), 2000);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Registration failed', detail: 'Please check your Internet connection!', life: 2000 });
      }
    });
  }

}

