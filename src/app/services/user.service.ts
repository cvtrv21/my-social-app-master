import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import usersList from '../data/usersList.json';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    console.log('USER-SERVICE IS RUN');
  }

  public usersArray : IUser[] = usersList;
  private loginID !: number;


  /**
   * Ritorna un utente con l'ID corrispondente
   * @param id
   * @returns
   */
  public getUserByID(id : number) {
    return this.usersArray[id];
  }

  public getAllUser(){
    return this.usersArray;
  }

  public getID(){
    return this.loginID;
  }


  /**
   * Verifichiamo se email e password esistono nel file usersList.json
   * @param email
   * @param pwd
   * @returns
   */
  public checkUserLogin(email : string, pwd : string) : boolean {
    let isFind = this.usersArray.find(user => email === user.email);
    if(isFind){
      if(isFind.password === pwd) {
        this.loginID = isFind.id;
        return true;
      }
    }
    return false;
  }

  public getUserID() : number {
    return this.loginID;
  }




}
