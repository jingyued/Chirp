import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-new-chirrup',
  templateUrl: './new-chirrup.component.html',
  styleUrls: ['./new-chirrup.component.sass']
})
export class NewChirrupComponent {
  chirrupForm: FormGroup;

  constructor(private fb: FormBuilder, private PostService: PostService) {
    this.chirrupForm = this.fb.group({
      text: ['', Validators.required],
      image: [''],
      video: ['']
    });
  }


  uploadImage(event: any): void {

  }

  uploadVideo(event: any): void {

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


    // const chirrup1 = {
    //   "content": { "image": "http://via.placeholder.com/640x360", "video": " ", "text": "I have posted a new chirrup", },
    // }




    this.PostService.postChirrup(newChirrup).subscribe({
      next: response => console.log('Chirrup posted successfully!', response),
      error: error => console.error('Failed to post chirrup:', error)
    });
  }
}
