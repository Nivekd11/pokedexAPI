import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public form!: FormGroup
  public mesageBlock : Boolean = false

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  
    this.form = new FormGroup({
      user: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    })
    
  }

  logIn(){
    
    // this.authService.user = this.form.get("user")?.value
    // this.authService.password = this.form.get("password")?.value
    this.authService.checkToken(this.form.get("user")?.value,this.form.get("password")?.value)
    console.log(this.authService.user,this.authService.password)
    if(!this.authService.auth){
      this.mesageBlock=true
    }
    else{
      this.mesageBlock=false
    }
    //this.authService.auth = true;
    localStorage.setItem("auth",this.authService.auth.toString())
  }

  logOut(){
    this.authService.auth = false;
    localStorage.setItem("auth","false")
  }

  showSession(){
    console.log('Canload', this.authService.auth);
    return this.authService.auth
  }

}
