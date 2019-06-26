import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/LoginService'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
 
export class ProfileComponent implements OnInit {
 
    b=false;
  constructor(public loginservice:LoginService) { }

  ngOnInit() {
  }

  onFileSelected(event){
    console.log(event)
  }

  editeProfile(){}

  addNews(){
    console.log("b is == ", this.b)
   this.b=true;
   console.log("second b is == ", this.b)
  }
  newsAdd(){
    return this.b
  }
 


  newsForm={title:'',telnum:'',message:'',email: '', password: '', remember: false}



}
