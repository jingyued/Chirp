import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetChirrupsService } from '../../../../shared/services/get-chirrups.service';
import { Chirrup } from '../../../../core/models/chirrup';

@Component({
  selector: 'app-liked-page',
  templateUrl: './liked-page.component.html',
  styleUrls: ['./liked-page.component.sass',
    '../../../../shared/components/chirrup-list/chirrup-list.component.sass',
    '../../../../shared/components/chirrup-card/chirrup-card.component.sass'
  ]
})
export class LikedPageComponent implements OnInit, OnDestroy {

  news: Chirrup[] = [];
  likedNews: Chirrup[] = [];
  shouldClearSessionStorage = false;


  constructor(private getChirrupsService: GetChirrupsService) { }

  ngOnInit() {
    this.shouldClearSessionStorage = true;
    this.getChirrupsService.getNews().subscribe({
      next: (data: Chirrup[]) => {
        this.news = data.map((item: Chirrup) => ({
          ...item,
          islike: false,
          showComments: false,
        }));
        this.filterLikedNews();
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.shouldClearSessionStorage) {
      // this.clearSessionStorage();
    }
  }

  clearSessionStorage() {
    // sessionStorage.clear();
  }


  filterLikedNews() {
    let likeStatus: { [key: string]: boolean } = {};
    if (sessionStorage.length > 0) {
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key !== null) {
          const value = sessionStorage.getItem(key);
          if (value !== null) {
            likeStatus[key] = value === 'true';
          }
        }
      }
    }

    this.likedNews = this.news.filter(item => {
      if (item._id !== undefined) {
        const itemId = item._id;
        return likeStatus[itemId] === true;
      } else {
        return false;
      }
    });
    console.log(this.likedNews)
  }


  toggleHeartIcon(chirrup: Chirrup) {
    chirrup.islike = !chirrup.islike;
    // 因为post service更改了model, 导致这里要handle chirrup._id undefined 的情况,
    // 实际上不会有不存在_id的post
    if (chirrup._id !== undefined) {
      sessionStorage.setItem(chirrup._id, chirrup.islike.toString());
      console.log(chirrup._id);
      console.log('add chirruo id to session');
    } else {
      console.error('chirrup._id is undefined');
    }
  };

  toggleCommentIcon(chirrup: Chirrup) {
    chirrup.showComments = !chirrup.showComments;
  }

}