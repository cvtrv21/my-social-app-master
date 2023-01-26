import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  public user: UserService = this._user;
  public profile!: IUser;
  public userID!: number;
  public friendsID: number[] = [];

  constructor(private _user: UserService, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = parseInt(this._route.snapshot.paramMap.get('id')!);
    this.userID = id;
    this.friendsID = this._user.getUserByID(this.userID).friendsList;
  }

  public getFriends(id: number) {
    return this._user.getUserByID(id);
  }
}
