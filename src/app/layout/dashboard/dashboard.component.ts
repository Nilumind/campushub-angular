import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  isChatOpen = false;
  activeTab: 'chat' | 'notifications' = 'chat';
  messages = [
    { sender: 'admin', text: 'Hello! How can I assist you?' },
    { sender: 'Kasun', text: 'I have a question about a event.' },
    { sender: 'admin', text: 'Sure! What’s your event name?' },
    { sender: 'Nimal', text: 'It’s the sangeethe music festival' },
    { sender: 'admin', text: 'Let me check... Please hold on.' }
  ];
  notifications: any[] = [];
  newMessage = '';

  constructor(private chatService: ChatService, private notificationService: NotificationsService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);
    });

    // this.notificationService.getNotifications().subscribe(notification => {
    //   this.notifications.push(notification);
    // });
  }
  openChatPopup() {
    this.isChatOpen = true;
  }

  closeChatPopup() {
    this.isChatOpen = false;
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chatService.sendMessage({ sender: 'admin', text: this.newMessage });
      this.newMessage = '';
    }
  }

}
