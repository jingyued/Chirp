import { Component, OnInit } from '@angular/core';
import { ProfileEditWindowComponent } from '../../pages/profile-edit-window/profile-edit-window.component';
import { UserService } from 'src/app/shared/services/user.service';
import { OpenPopUpService } from 'src/app/shared/services/open-pop-up.service';
import { Profile } from 'src/app/core/models/profile';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  user: Profile | undefined;

  constructor(
    private userService: UserService,
    private popup: OpenPopUpService
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
    this.popup.openPopUp(ProfileEditWindowComponent);
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