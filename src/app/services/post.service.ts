import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post';
import postsList from '../data/postsList.json';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Servizio che mi permette di leggere i post, scrivere un nuovo post
 */
export class PostService {

  public postsArray : IPost[] = postsList;
  public loginID !: number;

  constructor(private _user : UserService) {
    console.log('POST-SERVICE IS RUN');
    this.loginID = _user.getID();
  }

  /**
   * Metodo per creare un nuovo post
   * @param post
   */
  public createPost(post : string) {
    let newPost = {
      userID : this.loginID,
      stato : post
    }
    this.postsArray.unshift(newPost);
  }

  /**
   * Metodo per leggere i post
   * @param id
   * @returns
   */
  public getAllPost() {
    return this.postsArray
  }
}
