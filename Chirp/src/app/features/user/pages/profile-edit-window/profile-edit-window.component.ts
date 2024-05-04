import { Component, OnInit } from '@angular/core';
import { DialogCommunicationService } from '../register-window/dialog-communication.service';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  initForm() {
    const currentUser = this.userService.getCurrentUser();
    this.userForm = this.fb.group({
      userName: [currentUser.userName, Validators.required],
      userEmail: [currentUser.userEmail, [Validators.required, Validators.email]],
      gender: [currentUser.gender],
      age: [currentUser.age],
      phone: [currentUser.phone],
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
}
