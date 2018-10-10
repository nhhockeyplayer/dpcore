import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {SwUpdate} from '@angular/service-worker'

import {DomSanitizer} from '@angular/platform-browser'
import {ContentprojectorService} from './components/shared/services/singleton-services/contentprojector.service'

@Component({
  selector: 'app-dpcore',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'AKUMINA content projector microservice prototype'

  navigation = [
    {link: 'content', label: 'Content'},
  ]

  content: any

  // @ViewChild('iframe') iframe: ElementRef

  constructor(private updates: SwUpdate,
              private sanitizer: DomSanitizer,
              private microService: ContentprojectorService) {

    this.microService.project()
      .subscribe((content) => {
        console.log('subscribed contewnt--->' + content)
        this.content = content
      })
  }

  ngOnInit() {
    if (this.updates.isEnabled) {
      this.updates.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload()
        }
      })
    }

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}
