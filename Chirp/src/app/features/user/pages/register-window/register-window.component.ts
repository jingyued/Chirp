import { Component, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { Subject } from 'rxjs';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-window',
  templateUrl: './register-window.component.html',
  styleUrls: ['./register-window.component.sass']
})
export class RegisterWindowComponent {

  registerForm: any;

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
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

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }

  onSubmit() {
    // post
    this.onClosePopupDialog();
  }

}

