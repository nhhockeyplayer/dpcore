import {DomSanitizer} from '@angular/platform-browser'
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    console.log('safe pipe url --->' + url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
