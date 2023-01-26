import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private _user : UserService, private _route : Router, private _auth : AuthService){}


  public loginForm !: FormGroup;
  public messageState = '';

  ngOnInit() : void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required])
    })

  }

  get checkEmail() : FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get checkPassword() : FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public login() {
    let dati = this.loginForm.value;
    if(this._user.checkUserLogin(dati.email, dati.password)){
      this.messageState = "Accesso effettuato con successo";
      alert(this.messageState);
      this._auth.authenticatedUser();
      this._route.navigate(['/home']);
    }else{
      this.messageState = "Email o password errati. Riprova"
      alert(this.messageState);
    }

  }

}
