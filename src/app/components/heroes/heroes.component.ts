import { Component, OnInit } from '@angular/core';

// import hero class
import { Hero } from '../../classes/hero';

// services
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  modalShow = false;

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
