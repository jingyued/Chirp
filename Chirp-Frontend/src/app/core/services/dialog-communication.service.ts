import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Service for facilitating communication between components to handle dialog
export class DialogCommunicationService {
  private onCloseSignalSubject = new Subject<void>();

  closeSignal$ = this.onCloseSignalSubject.asObservable();

  // Provide extra function to emit signals when registration is successful
  emitRegistrationSuccess() {
    this.onCloseSignalSubject.next();
  }
}
