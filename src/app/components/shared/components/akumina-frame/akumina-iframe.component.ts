import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ContentprojectorService} from '../../services/singleton-services/contentprojector.service'
import {DomSanitizer} from '@angular/platform-browser'
import {takeLast} from 'rxjs/internal/operators'

@Component({
  selector: 'app-akumina-iframe',
  template: `
    <iframe #akuminaiframe
            [id]='akuminaiframe'
            [src]='url' >
    </iframe>
  `,
  styleUrls: ['./akumina-iframe.component.scss']
})
export class AkuminaIFrameComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() template

  url

  constructor(private microService: ContentprojectorService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    const self = this
    this.microService.projectorSubject$
      .pipe(
        takeLast(1)
      )
      .subscribe((url) => {
        this.url = self.transform(url)
      })
  }

  ngAfterViewInit() {
    console.log('template==>' + this.template)
  }

  ngOnDestroy() {
    this.microService.projectorSubject$.complete()
    this.microService.projectorSubject$.unsubscribe()
  }

  transform(url) {
    console.log('unsafe pipe url --->' + url)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

}





// onLoad() {
  // (load)='onLoad()'
  // this is caugin recursive infinite loop
  // return this.template
// }
