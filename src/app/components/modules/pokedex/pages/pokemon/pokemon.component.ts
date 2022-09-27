import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  id: number | undefined;
  name!: string;

  constructor(private activatedRouter : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params =>{
        this.id = params['id'];
      }
    )
    this.activatedRouter.data.subscribe(response => {
      this.name = response['pokemon'].name
      console.log(response)
    })
  }

}
