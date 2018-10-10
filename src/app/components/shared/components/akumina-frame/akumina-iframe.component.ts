import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ContentprojectorService} from '../../services/singleton-services/contentprojector.service'

@Component({
  selector: 'app-akumina-iframe',
  template: `
    <iframe #akuminaiframe
            id='akuminaiframe'
            src='{{url}} | unsafe'
            (load)='onLoad()'>
    </iframe>
  `,
  styleUrls: ['./akumina-iframe.component.scss']
})
export class AkuminaIFrameComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() template

  url

  constructor(private microService: ContentprojectorService) {
  }

  ngOnInit() {
    this.microService.projectorSubject$
      .subscribe((url) => {
        this.url = url
      })
  }

  ngAfterViewInit() {
    console.log(this.template)
  }

  ngOnDestroy() {
    this.microService.projectorSubject$.complete()
    this.microService.projectorSubject$.unsubscribe()
  }

  onLoad() {
    return this.template
  }

}
