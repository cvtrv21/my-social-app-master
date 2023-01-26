import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;

  constructor() { }

  public isAuthenticated(){
    return this.isLoggedIn;
  }

  public authenticatedUser(){
    return this.isLoggedIn = true;
  }

  public NotAuthenticatedUser(){
    return this.isLoggedIn = false;
  }
}
