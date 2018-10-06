import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {BehaviorSubject} from 'rxjs/index'
import {map, take, tap} from 'rxjs/internal/operators'
import {ChuckNorris} from '../../model/ChuckNorris'

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
 */

@Injectable({
  providedIn: 'root'
})
export class ContentprojectorService {
  public static kensAPI = 'http://meanstackconsulting.ddns.net:8080/#/about'
  public static arbitrarySSLWebsite = 'https://api.chucknorris.io/jokes/random'

  body: string = ''
  newContent: string = ''

  public projectorSubject$ = new BehaviorSubject<any>('')

  constructor(private http: HttpClient) {
    console.log('SINGLETON Loaded Instance ContentprojectorService')

    this.body = ''
    this.newContent = `<html>
                          <head>
                            <script language="Javascript">
                                function replaceContent(NC) {
                                        document.open();
                                        document.write(NC);
                                        document.close();
                                      }
                            </script>
                          </head>
                       <body  onload="replaceContent($(this.newContent)"> $(this.body)</body>
                       </html>`

  }

  project() {
    return this.http.get(ContentprojectorService.arbitrarySSLWebsite)
      .pipe(
        take(1),
        tap((item) => {
          console.log('this is the item coming in on observable of targeted website\m' + item)
          // this.body = item.value
          return item
        }),
        map((item) => {
          const preparedTarget = new ChuckNorris(0, this.newContent, ContentprojectorService.arbitrarySSLWebsite)

          this.projectorSubject$.next(item)
          this.projectorSubject$.complete()
        }),
      )
  }

}
