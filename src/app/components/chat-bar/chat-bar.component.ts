import { Component, OnInit } from '@angular/core';
import { IChatWindow } from 'src/app/interfaces/chat-window';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.scss']
})
export class ChatBarComponent implements OnInit{

  constructor(private _user : UserService, private _chat : ChatService) {}

  public chatBar : IChatWindow[] = [];

  ngOnInit(): void {
    this.chatBar = this._chat.getChatBar();
    console.log(this.chatBar);
  }

  public toggleChat(chat : IChatWindow) {
    this._chat.toggleChat(chat);
  }

  public closeWindow() {  }

  public reduceWindow(chat : IChatWindow) {
    this._chat.reduceChat(chat);
  }
}
