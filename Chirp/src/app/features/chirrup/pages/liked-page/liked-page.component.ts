import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetChirrupsService } from '../../services/get-chirrups.service';
import { Chirrup } from '../../../../core/models/chirrup';

@Component({
  selector: 'app-liked-page',
  templateUrl: './liked-page.component.html',
  styleUrls: ['./liked-page.component.sass',
    '../../components/chirrup-list/chirrup-list.component.sass',
    '../../../../shared/components/chirrup-card/chirrup-card.component.sass'
  ]
})
export class LikedPageComponent implements OnInit, OnDestroy {

  news: Chirrup[] = [];
  likedNews: Chirrup[] = [];
  shouldClearLocalStorage: boolean = false;


  constructor(private getChirrupsService: GetChirrupsService) { }

  ngOnInit() {
    this.shouldClearLocalStorage = true;
    // Fetch the whole news list from backend, filtered to only contain liked chirrups
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
    // Create a liked chirrup id list from localStorage for later comparation
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
      // load or offload selected chirrup to liked id list in localStorage
      localStorage.setItem(chirrup._id, chirrup.islike.toString());
    } else {
      console.error('chirrup._id is undefined');
    }
  };

  /**
   * Check on localStorage to find this chirrup is liked or not
   * @param id chrip id, generated from backend
   * @returns boolean
   */
  private getLikeStatusFromLocalStorage(id: string | undefined): boolean {
    if (id !== undefined) {
      const value = localStorage.getItem(id);
      return value === 'true';
    }
    return false;
  }
}