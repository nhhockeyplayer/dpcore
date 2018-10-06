import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
import {SwUpdate} from '@angular/service-worker'
import {ContentprojectorService} from './components/shared/services/contentprojector/contentprojector.service'

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

  updatesAvailable: boolean = false
  content: any

  constructor(private updates: SwUpdate, private microService: ContentprojectorService) {

  }

  ngOnInit() {
    // updates.activateUpdate()
    //   .then(() => {
    //     // refresh new service workers new version of the app
    //     document.location.reload()
    //   })
    if (this.updates.isEnabled) {

      this.updates.available.subscribe(() => {

        if (confirm('New version available. Load New Version?')) {

          window.location.reload()
        }
      })
    }

    this.microService.project()
      .subscribe((content) => {
        this.content = content
      })
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

  onClick() {
    this.microService.projectorSubject$
      .subscribe((content) => {
        this.content = content
      })
  }

}
