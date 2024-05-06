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
  shouldClearLocalStorage = false;


  constructor(private getChirrupsService: GetChirrupsService) { }

  ngOnInit() {
    this.shouldClearLocalStorage = true;
    this.getChirrupsService.getNews().subscribe({
      next: (data: Chirrup[]) => {
        this.news = data.map((item: Chirrup) => ({
          ...item,
          islike: this.getLikeStatusFromLocalStorage(item._id),
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
    if (this.shouldClearLocalStorage) {
      // this.clearLocalStorage();
    }
  }

  clearLocalStorage() {
    // localStorage.clear();
  }


  filterLikedNews() {
    let likeStatus: { [key: string]: boolean } = {};
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== null) {
          const value = localStorage.getItem(key);
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
  }


  toggleHeartIcon(chirrup: Chirrup) {
    chirrup.islike = !chirrup.islike;
    if (chirrup._id !== undefined) {
      localStorage.setItem(chirrup._id, chirrup.islike.toString()); //覆盖
    } else {
      console.error('chirrup._id is undefined');
    }
  };

  toggleCommentIcon(chirrup: Chirrup) {
    chirrup.showComments = !chirrup.showComments;
  }
  private getLikeStatusFromLocalStorage(id: string | undefined): boolean {
    if (id !== undefined) {
      const value = localStorage.getItem(id);
      return value === 'true';
    }
    return false;
  }
}