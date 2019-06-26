import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from '../login/User';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService{

    constructor(private httpclient: HttpClient){}

    
    users:User;
    public servicelogin(user){
        this.isExiste(user).subscribe(
            data=>{
              this.users=data
              console.log("data is   ", data)
            }
          )
    }   

    public postLogin(user){
        this.addUsers(user)
        .subscribe(
            (data:any)=>{
                console.log(data)
            }
        )
    }




    public getUser(){
     return this.users;
    }

    public isThere(){
        if(this.users==null) return false;
        else{return true;}
    }

    public isOut(){
    this.users=null;
    this. isThere();
    }
    public getName(){
        return this.users.username;
    }
    public getAdmin(){
        return this.users.role;
    }
    public isAdmin(){
        if(this.getAdmin()=='Admin'){return true;}
        return false;
    }

   public isExiste(user):Observable<any>{
        console.log("user name is : "+user.email, "password is : "+user.password)
        return  this.httpclient.get<User>("http://localhost:8080/user/"+user.email+"/"+user.password)
    }


    public  getAllUsers():Observable<any>{
        return this.httpclient.get("http://localhost:8080/users")
       }


       public addUser (user): Observable<any>{
           console.log("Post work !!!!!!!!!!!!!!!!!")
           console.log("this is from post ", user)
           let headers = new Headers({ 'Content-Type': 'application/json' });
           let options = new RequestOptions({ headers: headers });
        return this.httpclient.post( "http://localhost:8080/user", user);
       }

       public addUsers(user):Observable<any>{
          return this.httpclient.post("http://localhost:8080/user",user)
         
       }

}
