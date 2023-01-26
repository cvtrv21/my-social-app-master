import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IPost } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public arrPost : IPost[] = [];
  public newPost : string = '';

  constructor(private _user : UserService, private _post : PostService) { }

  public user : UserService = this._user;

  ngOnInit(): void {
    this.arrPost = this._post.getAllPost();
    console.log(this.arrPost);
  }

  public onInput(event : Event) {
    this.newPost = (<HTMLInputElement>event.target).value;
  }

  public onClick() {
    this._post.createPost(this.newPost);
  }



}
