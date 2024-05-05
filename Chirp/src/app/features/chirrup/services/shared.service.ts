import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private newChirrupSubject = new Subject<void>();

  // 用于通知 chirrup-list 刷新的方法
  notifyChirrupListRefresh(): void {
    this.newChirrupSubject.next();
  }

  // 获取一个 Observable，用于 chirrup-list 监听通知
  getChirrupListRefreshNotifier(): Observable<void> {
    return this.newChirrupSubject.asObservable();
  }
}
