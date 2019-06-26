

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

import {LoginService} from '../services/LoginService';

import {RegisterComponent} from '../register/register.component';
import {User} from './User';

import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

 
  constructor(public dialogRef: 
    MatDialogRef<LoginComponent>,
    public loginservice:LoginService,
    public dialog: MatDialog) { }

    //user:User;
  
  onSubmit() {
    this.dialogRef.close();
  }
 ngOnInit() {  }

 user = {email: '', password: '', remember: false};
 public loginuser(user){
   this.loginservice.servicelogin(user)
  }

 

 

}
