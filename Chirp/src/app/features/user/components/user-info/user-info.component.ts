import { Component, OnInit, OnDestroy } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileEditWindowComponent } from '../../pages/profile-edit-window/profile-edit-window.component';
import { DialogCommunicationService } from '../../pages/register-window/dialog-communication.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnDestroy {

  ref: DynamicDialogRef | undefined;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private dialogService: DialogService,
    private dialogCommunicationService: DialogCommunicationService
  ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openProfileEditPopup(event: Event) {
    event.preventDefault();

    try {
      this.ref = this.dialogService.open(ProfileEditWindowComponent, {
        width: '25rem',
        showHeader: false,
        contentStyle: {
          "max-height": "650px",
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
      this.ref.close();
    }
  }

  selectedButton = 'Posts';
  buttonColors = {
    black: 'black',
    grey: '#D3D3D3'
  };

  user = {
    name: 'Felix',
    gender: 'Male',
    birth: new Date("1997-11-06"),
    email: "zixinzhang0519@gmail.com"
  }


  getAge(birth: Date): number {
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  selectButton(button: string): void {
    this.selectedButton = button;
  }


}