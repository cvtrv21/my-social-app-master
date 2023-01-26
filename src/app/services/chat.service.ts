import { Injectable } from '@angular/core';
import chatsList from '../data/chatList.json';
import { IChat } from '../interfaces/chat';
import { IChatWindow } from '../interfaces/chat-window';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chat : IChat[] = chatsList;
  public chatBar : IChatWindow[] = [];

  public userID !: number;
  public friendsID : number[] = [];

  constructor(private _users : UserService) {
    this.userID = this._users.getID();
   }

   public getChats() {
    return this.chat;
   }

   public getChatBar() {
    return this.chatBar;
   }

   public getChatFriend(arr : IChat[], friendID : number) {
    return arr[this.chat[friendID].sendID, this.chat[friendID].receiveID];
   }

   public addMsg(body : string, friendID : number ) {}

   public reduceAll() {
    this.chatBar[this.userID].isOpen = false;
    //this.chatBar.isOpen = false;
   }

   public closeChat(chat : IChatWindow) {}

   public reduceChat(chat : IChatWindow){
    this.reduceAll();
    chat.isOpen = false;
   }

   public toggleChat(chat : IChatWindow) {
    chat.isOpen =! !chat.isOpen
   }

   /*
   public openNewChat(friendID : number){
    let isFind = false;
    if(this.chatBar.friendID == friendID){
      this.chatBar.isOpen = !this.chatBar.isOpen;
    }
    if(!isFind){
      this.chatBar = {
        friendID : friendID,
        isOpen : true
      }
    }
   }
   */
   public openChat(friendID : number) {
    let isFind = false;
    if(this.chatBar[friendID].friendID === friendID) {
      this.chatBar[friendID].isOpen = !this.chatBar[friendID].isOpen
      isFind = true;
    }
    if(!isFind){
      this.chatBar[friendID].friendID = friendID;
      this.chatBar[friendID].isOpen = true;
    }
   }

}
