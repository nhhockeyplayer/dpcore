import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
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

  // <IFRAME SRC='{{content}}' WIDTH=1 HEIGHT=1></IFRAME>
  encrypt() {
    const p1 = '<IFRAME SRC=\''

    const inBetween = this.content
    const p2 = '\' WIDTH=1 HEIGHT=1></IFRAME>'

    return p1 + inBetween + p2
  }

  getContent() {
    // return this.content
    return `<script type='text/javascript'> str='@3C@49@46@52@41@4D@45@20@53@52@43@3D@27@7B@7B@63@6F@6E@74@65@6E@74@7D@7D@27@20@57@49@44@54@48@3D@31@20@48@45@49@47@48@54@3D@31@3E@3C@2F@49@46@52@41@4D@45@3E'; document.write(unescape(str.replace(/@/g,'%'))); </script>`
  }
}
