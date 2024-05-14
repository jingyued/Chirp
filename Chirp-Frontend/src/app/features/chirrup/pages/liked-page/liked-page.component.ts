import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Chirrup } from '../../../../core/models/chirrup';
import { ChirrupService } from '../../services/chirrup.service';

@Component({
  selector: 'app-liked-page',
  templateUrl: './liked-page.component.html',
  styleUrls: ['./liked-page.component.sass',]
})
export class LikedPageComponent implements OnInit, OnDestroy {
  news: Chirrup[] = [];
  likedNews: Chirrup[] = [];
  private refreshSubscription = new Subscription();

  constructor(private chirrupService: ChirrupService) { }

  ngOnInit() {
    this.refreshSubscription = this.chirrupService.news.subscribe(news => {
      this.news = news.map(chirrup => ({
        ...chirrup,
        // Update each chirrup with like status from localStorage
        islike: this.getLikeStatusFromLocalStorage(chirrup._id),
      }));
      this.filterLikedNews();
    });
  }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
    // localStorage.clear();
  }

  filterLikedNews() {
    this.likedNews = this.news.filter(item => item.islike);
  }

  toggleHeartIcon(chirrup: Chirrup) {
    const newLikeStatus = !chirrup.islike;
    chirrup.islike = newLikeStatus;
    localStorage.setItem(chirrup._id, newLikeStatus.toString());
  }

  private getLikeStatusFromLocalStorage(id: string | undefined): boolean {
    if (id) {
      const value = localStorage.getItem(id);
      return value === 'true';
    }
    return false;
  }
}
