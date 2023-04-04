import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  // Lista de heróis sendo importados
  heroes : Hero[] = [];

  // Função click de selecionar um herói

  selectHero?: Hero;


  constructor(
    private HeroService: HeroService
  ){

  }
  ngOnInit(): void {
    this.getHeroes();
  }


  getHeroes(): void{
    this.heroes = this.HeroService.getHeroes();
  }

  onSelect(hero: Hero) : void{
    this.selectHero = hero;
  }


}
