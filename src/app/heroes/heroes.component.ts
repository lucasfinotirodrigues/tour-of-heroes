import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { heroesList } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {


  hero: Hero = {
    id: 1,
    name:'Wolverine'
  };

  // Lista de heróis sendo importados

  heroes = heroesList;

  // Função click de selecionar um herói

  selectHero?: Hero;

  onSelect(hero: Hero) : void{
    this.selectHero = hero;
  }


}
