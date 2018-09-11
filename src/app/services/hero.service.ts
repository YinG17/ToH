import { Injectable } from '@angular/core';

// obs
import { Observable, of } from 'rxjs';

// hero class
import { Hero } from '../classes/hero';

// message
import { MessagesService } from '../services/messages.service';

//
import { HttpClient, HttpHeaders } from '@angular/common/http';

//
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'app/heroes'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(heroes => 'fetched heroes'),
      catchError(this.handleError('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      `${operation} failed: ${error.message}`;

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // fetch hero ID
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => `fetched hero id=${id}`),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessagesService
  ) {}

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => `updated hero id=${hero.id}`),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((hero: Hero) => `added hero w/ id=${hero.id}`),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => `deleted hero id=${id}`),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => `found heroes matching "${term}"`),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
