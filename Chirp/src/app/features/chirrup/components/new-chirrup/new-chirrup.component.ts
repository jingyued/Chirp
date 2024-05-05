import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-new-chirrup',
  templateUrl: './new-chirrup.component.html',
  styleUrls: ['./new-chirrup.component.sass']
})
export class NewChirrupComponent {
  chirrupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private PostService: PostService,
    private sharedService: SharedService

  ) {
    this.chirrupForm = this.fb.group({
      text: ['', Validators.required],
      image: [''],
      video: ['']
    });
  }

  postChirrup() {
    const formData = this.chirrupForm.value;
    // const newChirrup = {
    //   publisherName: 'Felix',
    //   content: {
    //     image: formData.image,
    //     video: formData.video,
    //     text: formData.text,
    //   },
    //   publishedTime: new Date().toISOString(),
    //   comment: [],
    //   likedIdList: [],
    // }
    const newChirrup = {
      "publisherName": "Felix",
      "content": {
        "image": "formData.image",
        "video": "formData.video",
        "text": formData.text
      },
      "publishedTime": "2024-05-03T12:34:56.789Z",
      "comment": [],
      "likedIdList": []
    }


    this.PostService.postChirrup(newChirrup).subscribe({
      next: () => {
        // 发送成功后通知 chirrup-list 组件刷新
        this.sharedService.notifyChirrupListRefresh();
        // 清空表单
        this.chirrupForm.reset();
      },
      error: (error: any) => console.error('Failed to post chirrup:', error)
    });
  }
}
