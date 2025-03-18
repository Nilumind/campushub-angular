import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  // private socket = io('http://localhost:3000');

  sendMessage(message: any) {
    // this.socket.emit('sendMessage', message);
  }

  getMessages(): Observable<any> {
    return new Observable(observer => {
      // this.socket.on('receiveMessage', (msg: any) => {
      //   observer.next(msg);
      // });
    });
  }
}
