import { Component, OnInit } from '@angular/core';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/core/models/user';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-window',
  templateUrl: './profile-edit-window.component.html',
  styleUrls: ['./profile-edit-window.component.sass']
})
export class ProfileEditWindowComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  currentUser = this.userService.getCurrentUser()
  initForm() {
    // const currentUser = this.userService.getCurrentUser();
    this.userForm = this.fb.group({
      userName: [this.currentUser.userName, Validators.required],
      userEmail: [this.currentUser.userEmail, [Validators.required, Validators.email]],
      name: [this.currentUser.name, [this.isNameValid()]],
      gender: [this.currentUser.gender],
      age: [this.currentUser.age, [this.isIntegerValidator()]],
      phone: [this.currentUser.phone, [this.isPhoneNumberValidator()]],
    });
  }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedUserData: User = this.userForm.value;
      this.userService.updateCurrentUser(updatedUserData);
      this.onClosePopupDialog(); // Close the dialog after updating user data
    } else {
      // Handle form validation errors
    }
  }
  isIntegerValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (value && !Number.isInteger(Number(value))) {
        return { notInteger: true }; // Return an error object if the value is not an integer
      }
      return null; // Return null if the value is an integer or empty
    };
  }

  isPhoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const phoneNumberRegex = /^\d{10}$/; // Regex pattern for 10-digit number
      if (value && !phoneNumberRegex.test(value)) {
        return { invalidPhoneNumber: true }; // Return an error object if the phone number is invalid
      }
      return null; // Return null if the phone number is valid or empty
    };
  }
  isNameValid(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const pattern = /^[A-Za-z ]+$/;
      const isValid = pattern.test(value);
      if (!isValid) {
        return { invalidName: true};
      }
      return null;
    };
  }

}
