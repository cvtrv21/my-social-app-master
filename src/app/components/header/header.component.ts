import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _auth : AuthService, private _user : UserService) {}

  public title = 'My-Social-App'



  public logout() {
    this._auth.NotAuthenticatedUser();
  }
}
