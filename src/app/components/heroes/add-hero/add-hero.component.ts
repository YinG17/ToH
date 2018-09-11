import { Component } from '@angular/core';

// import hero class
import { Hero } from '../../../classes/hero';

// services
import { HeroService } from '../../../services/hero.service';

@Component({
  selector: 'add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
