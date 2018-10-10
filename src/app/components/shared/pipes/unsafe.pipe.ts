import {DomSanitizer} from '@angular/platform-browser'
import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'unsafe'})
export class UnSafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url) {
    console.log('unsafe pipe url --->' + url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
