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
          islike: false
        }));
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }

  toggleHeartIcon(chirrup: Chirrup) { // It's better to type the parameter as Chirrup if that's what it's expected to be
    chirrup.islike = !chirrup.islike; // This will toggle the like state of the chirrup
  }
}
