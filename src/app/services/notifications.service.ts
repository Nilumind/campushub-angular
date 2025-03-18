import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  // private socket = io('http://localhost:3000');

  sendNotification(notification: any) {
    // this.socket.emit('sendNotification', notification);
  }
}
