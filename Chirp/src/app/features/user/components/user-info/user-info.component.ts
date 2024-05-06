import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileEditWindowComponent } from '../../pages/profile-edit-window/profile-edit-window.component';
import { DialogCommunicationService } from '../../pages/register-window/dialog-communication.service';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnDestroy, OnInit {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();
  user: User | undefined;

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
      const currName = localStorage.getItem('userName');
      if (currName !== null) {
        this.userService.getUserInfo(currName).subscribe(res => {
          this.userService.currentUser = <User>res;
          this.user = this.userService.currentUser;
        })
      }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getUserInfo(): void {
    this.user = this.userService.currentUser;
  }
  
  openProfileEditPopup(event: Event) {
    event.preventDefault();

    try {
      this.ref = this.dialogService.open(ProfileEditWindowComponent, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "max-height": "1050px",
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
      this.getUserInfo();
      this.ref.close();
    }
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