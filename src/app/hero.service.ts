import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { heroesList} from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return heroesList;
  }
}
