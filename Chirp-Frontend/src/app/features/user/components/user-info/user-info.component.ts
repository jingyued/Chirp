import { Component, OnInit } from '@angular/core';
import { ProfileEditWindowComponent } from '../profile-edit-window/profile-edit-window.component';
import { UserService } from 'src/app/core/services/user.service';
import { Profile } from 'src/app/core/models/profile';
import { DialogControlService } from 'src/app/core/services/dialog-control.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  user: Profile | undefined;

  constructor(
    private userService: UserService,
    private dialogService: DialogControlService
  ) { }

  ngOnInit(): void {
    const currName = localStorage.getItem('userName');
    // TODO: logic refactor
    if (currName !== null) {
      this.userService.getUserInfo(currName);
    }
    this.userService.currentUser.subscribe(update => {
      this.user = update;
    })
  }

  openProfileEditPopup() {
    this.dialogService.openPopUp(ProfileEditWindowComponent);
  }

  selectedButton = 'Posts';
  buttonColors = {
    black: 'black',
    grey: '#D3D3D3'
  };

  selectButton(button: string): void {
    this.selectedButton = button;
  }


}