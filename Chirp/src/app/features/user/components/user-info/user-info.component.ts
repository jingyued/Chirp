import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileEditWindowComponent } from '../../pages/profile-edit-window/profile-edit-window.component';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/core/models/user';
import { OpenPopUpService } from 'src/app/shared/services/open-pop-up.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  user: User | undefined;

  constructor(
    private userService: UserService,
    private popup: OpenPopUpService
  ) { }

  ngOnInit(): void {
    const currName = localStorage.getItem('userName');
    if (currName !== null) {
      this.userService.getUserInfo(currName);
    }
    this.userService.currentUser.subscribe(update => {
      this.user = update;
    })
  }

  openProfileEditPopup(event: Event) {
    event.preventDefault();
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