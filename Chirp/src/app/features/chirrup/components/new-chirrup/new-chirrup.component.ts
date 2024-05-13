import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { SharedService } from '../../services/shared.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-chirrup',
  templateUrl: './new-chirrup.component.html',
  styleUrls: ['./new-chirrup.component.sass'],
  providers: [MessageService]
})
export class NewChirrupComponent {
  chirrupForm: FormGroup;
  private loginSubscription: any;
  isLogin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private PostService: PostService,
    private sharedService: SharedService,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.chirrupForm = this.fb.group({
      text: ['', Validators.required],
      image: [''],
      video: ['']
    });

    this.loginSubscription = this.authService.loginStatus.subscribe(update => {
      this.isLogin = update;
    })
  }

  postChirrup() {
    const formData = this.chirrupForm.value;
    const currName = localStorage.getItem('userName');

    const newChirrup = {
      publisherName: (currName === null) ? '' : currName,
      content: {
        // image: "image not available",
        // video: "video not available",
        text: formData.text
      },
      publishedTime: new Date().toISOString(),
      comment: [],
      likedIdList: []
    }


    this.PostService.postChirrup(newChirrup).subscribe({
      next: () => {
        // 发送成功后通知 chirrup-list 组件刷新
        this.sharedService.notifyChirrupListRefresh();
        // 清空表单
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
}
