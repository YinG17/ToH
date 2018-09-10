import { Component, OnInit } from '@angular/core';

// import class
import { Hero } from '../../classes/hero';

// import message service
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.scss']
})
export class HeroDashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}
