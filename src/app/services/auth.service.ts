import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public auth : boolean = false;
  public user : string = '';
  public password: string = '';
  public  token : string = '';

  constructor() { }

  logIn(){
    this.auth = true;
  }
  logOut(){
    this.auth = false
  }
  setSession(){
    if(localStorage.getItem("auth")==null){
      localStorage.setItem("auth","false")
    }else{
      if(localStorage.getItem("auth")=="true"){
        this.auth= true
      }else{
        this.auth = false
      }
    }
  }

  checkToken(user: string,password:string){
    if(user==="kevin" && password==="hola123"){
      console.log("credentials:",user,password)
      this.token = "asdasd3424efdsd4qweawdd23"
      this.auth = true
    }else{
      this.auth = false
    }
    
  }
}
