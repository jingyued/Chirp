import { Component, OnInit } from '@angular/core';
import { GetChirrupsService } from '../../services/get-chirrups.service';
import { Chirrup } from '../../../core/models/chirrup';

@Component({
  selector: 'app-chirrup-list',
  templateUrl: './chirrup-list.component.html',
  styleUrls: ['./chirrup-list.component.sass', '../chirrup-card/chirrup-card.component.sass']
})
export class ChirrupListComponent implements OnInit {
  news: Chirrup[] = []; // This will hold an array of Chirrup objects

  constructor(private getChirrupsService: GetChirrupsService) { }

  ngOnInit() {
    this.getChirrupsService.getNews().subscribe({
      next: (data: Chirrup[]) => { // Ensure this is typed as an array of Chirrup
        this.news = data.map((item: Chirrup) => ({ // Use parentheses for the syntax
          ...item,
          islike: false,
          showComments: false,
        }));
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  toggleHeartIcon(chirrup: Chirrup) {
    chirrup.islike = !chirrup.islike;
    // 因为post service更改了model, 导致这里要handle chirrup._id undefined 的情况,
    // 实际上不会有不存在_id的post
    if (chirrup._id !== undefined) {
      sessionStorage.setItem(chirrup._id, chirrup.islike.toString());
    } else {
      console.error('chirrup._id is undefined');
    }
  };

  toggleCommentIcon(chirrup: Chirrup) {
    chirrup.showComments = !chirrup.showComments;
  }
}
