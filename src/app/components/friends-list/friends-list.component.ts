import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  constructor(private _user: UserService, private _chats : ChatService) {}

  public userID!: number;
  public friendsID: number[] = [];
  public searchUser : string = '';

  ngOnInit(): void {
    this.userID = this._user.getID();
    this.friendsID = this._user.getUserByID(this.userID).friendsList;
  }

  public getFriends(id: number) {
    return this._user.getUserByID(id);
  }

  public onInputSearch(event : Event) {
    this.searchUser = (<HTMLInputElement>event.target).value;
  }

  public openChat(id : number) {
    //this._chats.openNewChat(friendID);
    console.log(this._chats.openNewChat(id));

  }
}