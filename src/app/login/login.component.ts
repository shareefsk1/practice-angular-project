import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServerService } from '../login-server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })


  constructor(private _loginServer:LoginServerService , private _router:Router){}

  submit(){
    this._loginServer.login(this.loginForm.value).subscribe(
      (data:any) => {
        sessionStorage.setItem('app-token',data.token);
        this._router.navigateByUrl('/dashboard');
      },
      (err:any) => {
        alert('Invalid Details')
      }
    )
  }

}
