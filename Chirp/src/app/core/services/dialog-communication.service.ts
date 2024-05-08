import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogCommunicationService {
  private onCloseSignalSubject = new Subject<void>();

  closeSignal$ = this.onCloseSignalSubject.asObservable();

  emitRegistrationSuccess() {
    this.onCloseSignalSubject.next();
  }
}
