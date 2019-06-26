import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import {RegisterComponent} from '../register/register.component'
import {User} from '../login/User';
import {LoginService} from '../services/LoginService';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog,public loginservice:LoginService) { }
 


  ngOnInit() {

  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

  openRegisterForm(){
    this.dialog.open(RegisterComponent, {width: '650px', height: '500px'});
  }

  logoutForm(){
    this.loginservice.isOut();
  }

  


}
