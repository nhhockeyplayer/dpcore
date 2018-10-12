import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {from} from 'rxjs/index'
import {delay, map, tap} from 'rxjs/internal/operators'

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

//
// @Injectable({
//   providedIn: 'root'
// })
@Injectable({
  providedIn: 'root',
})
export class ContentprojectorService {
  private static kensAPI = 'http://meanstackconsulting.ddns.net:8080/#/about'
  private static arbitrarySSLWebsite = 'https://api.chucknorris.io/jokes/random'
  private static akuminaSSLVideo = 'https://www.youtube.com/watch?v=3v8rwT559iY&output=embed&autoplay=1'

  // public privateSubject$ = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) {
    console.log('SINGLETON Loaded Instance ContentprojectorService')
  }

  project() {
    const array = [ContentprojectorService.akuminaSSLVideo]
    const source$ = from(array)
      .pipe(
        tap((item) => {
          console.log('service item' + item)
          return item
        }),
        map((item) => item),
        delay(5000)
      )
    return source$
  }
}
