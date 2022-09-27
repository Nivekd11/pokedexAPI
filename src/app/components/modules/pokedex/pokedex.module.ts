import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PekedexRoutingModule } from './pekedex-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    FindComponent,
    PokemonComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    PekedexRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PokedexModule { }
