import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(public http: HttpClient,public auth: AuthService) { }
  
  public response!: any
 

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    const URL = "https://postman-echo.com/basic-auth"
    this.response = this.http.get(URL).subscribe( response => {
      console.log(response)
      return response;
    })

  }

}
