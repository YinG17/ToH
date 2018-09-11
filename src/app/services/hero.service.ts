import { Injectable } from '@angular/core';

// obs
import { Observable, of } from 'rxjs';

// hero class
import { Hero } from '../classes/hero';

// hero list
import { HEROES } from '../mock-files/mock-heroes';

// message
import { MessagesService } from '../services/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // fetch hero
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('Message: Heroes Arrived!!');
    return of(HEROES);
  }

  // fetch hero ID
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero Log: fetched hero id = ${id} `);
    return of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessagesService) {}
}
