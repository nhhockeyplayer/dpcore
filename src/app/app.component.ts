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

  constructor(updates: SwUpdate, private microService: ContentprojectorService) {

    updates.activateUpdate()
      .then(() => {
        // refresh new service workers new version of the app
        document.location.reload()
      })
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }

}
