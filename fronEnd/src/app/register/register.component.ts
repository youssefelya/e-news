import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material';


import {HeaderComponent} from '../header/header.component';
import {LoginService} from '../services/LoginService';
import { User } from '../login/User';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

 
  constructor(public dialogRef: 
    MatDialogRef<RegisterComponent>,public dialog: MatDialog,
    public loginservice:LoginService) { }

    user = {username:'',email:'',tel:'', password:''};
    
  onSubmit() {
    this.dialogRef.close();
  }
  /*isAdmin(){
    if(this.user.writer){return 'Admin'}
    return 'User'
  }*/
  users:{username:string,email:string,tel:string, password:string};
   


 ngOnInit() {  }

 getRegister(){
   console.log("user X == ",this.user)
   //this.getUser();
   console.log("Real User X == ",this.users)
  this.loginservice.postLogin(this.user)
  //console.log("is admin ? ",this.isAdmin())
 }




/* getUser(){
   var x1=this.user.username;
   this.users.username=x1;
   this.users.email=this.user.email;
   this.users.password=this.user.password
  // this.users.role= this.isAdmin();
 }*/





 getUserd(){

 }






}
