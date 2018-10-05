import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

/**
 * MicroService
 *
 *  Application Wide Singleton - for content projection
 */

@Injectable({
  providedIn: 'root'
})
export class ContentprojectorService {
  public static kensAPI = 'http://meanstackconsulting.ddns.net:8080/#/about'
  public static chuckNorrisAPI = 'https://api.chucknorris.io/jokes/random'

  constructor(private http: HttpClient) {
    console.log('Instance Loaded ContentprojectorService')
  }

  project() {
    return this.http.get(ContentprojectorService.chuckNorrisAPI)
  }
}
