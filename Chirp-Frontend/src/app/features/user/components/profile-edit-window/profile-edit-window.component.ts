import { Component, OnInit } from '@angular/core';
import { DialogCommunicationService } from '../../../../core/services/dialog-communication.service';
import { UserService } from 'src/app/core/services/user.service';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Profile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-profile-edit-window',
  templateUrl: './profile-edit-window.component.html',
  styleUrls: ['./profile-edit-window.component.sass']
})
export class ProfileEditWindowComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  targetUser: Profile | undefined;

  constructor(
    private dialogCommunicationService: DialogCommunicationService,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(update => {
      this.targetUser = update;
      console.log(this.targetUser._id);
      
    })
    this.initForm();
  }

  initForm() {
    // const currentUser = this.userService.getCurrentUser();
    this.userForm = this.fb.group({
      _id: [this.targetUser?._id],
      userName: [this.targetUser?.userName, Validators.required],
      userEmail: [this.targetUser?.userEmail, [Validators.required, Validators.email]],
      name: [this.targetUser?.name, [this.isNameValid()]],
      gender: [this.targetUser?.gender],
      age: [this.targetUser?.age, [this.isIntegerValidator()]],
      phone: [this.targetUser?.phone, [this.isPhoneNumberValidator()]],
    });
  }

  onClosePopupDialog() {
    this.dialogCommunicationService.emitRegistrationSuccess();
  }

  onSubmit() {
    if (this.userForm.valid) {
      const updatedProfileData: Profile = this.userForm.value;
      this.userService.updateCurrentUser(updatedProfileData);
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
        return { invalidName: true };
      }
      return null;
    };
  }

}
