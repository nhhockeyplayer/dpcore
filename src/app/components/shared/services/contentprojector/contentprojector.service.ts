import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject, from} from 'rxjs/index'
import {map, take, tap} from 'rxjs/internal/operators'

/**
 * MicroService
 * Application Wide Singleton - for content projection
 *
 * models a finite http observable stream
 *
 *    prepares and logs 1 item from http observable
 *    emits 1 item
 *    multicasts item to observers
 *    completes and closes stream
 *
 *    The ChuckNorris Joke site https://api.chucknorris.io/jokes/random
 *    was the only SSL website available to test against to fabricate/simulate HTML full page  projected document
 */

@Injectable({
  providedIn: 'root'
})
export class ContentprojectorService {
  public static kensAPI = 'http://meanstackconsulting.ddns.net:8080/#/about'
  public static arbitrarySSLWebsite = 'https://api.chucknorris.io/jokes/random'
  public static akuminaSSLVideo = 'https://www.youtube.com/watch?v=3v8rwT559iY&output=embed&autoplay=1'

  public projectorSubject$ = new BehaviorSubject<any>('')

  constructor(private http: HttpClient) {
    console.log('SINGLETON Loaded Instance ContentprojectorService')
  }

  project() {
    const array = [ContentprojectorService.akuminaSSLVideo]
    const source$ = from(array)
      .pipe(
        take(1),
        tap((item) => {
          return item
        }),
        map((item) => {
          this.projectorSubject$.next(item)
          this.projectorSubject$.complete()
          return item
        })
      )
    return source$
  }

}
