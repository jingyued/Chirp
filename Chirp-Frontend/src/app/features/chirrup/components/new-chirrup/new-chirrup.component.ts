import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChirrupService } from '../../services/chirrup.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChirrupPost, FormData } from '../../../../core/models/chirrup'
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-chirrup',
  templateUrl: './new-chirrup.component.html',
  styleUrls: ['./new-chirrup.component.sass'],
  providers: [MessageService]
})
export class NewChirrupComponent {
  chirrupForm: FormGroup;
  isLogin: boolean | undefined;

  constructor(
    private fb: FormBuilder,
    private chirrupService: ChirrupService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.chirrupForm = this.fb.group({
      text: ['', Validators.required],
      image: [''],
      video: ['']
    });

    this.authService.loginStatus.subscribe(update => {
      this.isLogin = update;
    });
  }

  onClickSubmitChirrup() {
    if (!this.isLogin) {
      alert("Please log in to post a chirrup.");
      return;
    }

    const formData: FormData = this.chirrupForm.value;
    const currName: string | null = localStorage.getItem('userName');

    const newChirrup: ChirrupPost = {
      publisherName: (currName === null || !this.isLogin) ? '' : currName,
      content: {
        text: formData.text,
        image: formData.image || 'no image',
        video: formData.video || 'no video'
      },
      publishedTime: new Date().toISOString(),
      comment: [],
      likedIdList: []
    };

    this.chirrupService.postChirrup(newChirrup).subscribe({
      next: () => {
        this.chirrupForm.reset();
        //alert("you have successfully posted a new chirrup!");
        this.messageService.add({ severity: 'success', summary: 'Post sent successfully', detail: 'You have posted a new chirrup!', life: 2000 });

      },
      error: (error: any) => {
        console.error('Failed to post chirrup:', error);
        this.messageService.add({ severity: 'error', summary: 'Post failed', detail: 'Please check your Internet connection!', life: 2000 });
      } 
    });

  }
  ngOnDestroy() {
    // this.loginSubscription.unsubscribe();
  }
}
