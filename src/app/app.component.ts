import {HostListener, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
import {SwUpdate} from '@angular/service-worker'
import {ResponsiveService} from './components/shared/services/singleton-services/responsive.service'

@Component({
  selector: 'app-dpcore',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'AKUMINA content projector microservice prototype'

  navigation = [
    {link: 'content', label: 'Content'},
  ]

  constructor(private updates: SwUpdate,
              private responsiveService: ResponsiveService) {
  }

  ngOnInit() {
    this.responsiveService.getMobileStatus().subscribe(isMobile => {
      if (isMobile) {
        console.log('Mobile device detected')
      } else {
        console.log('Desktop detected')
      }
    })
    this.onResize(null)

    if (this.updates.isEnabled) {
      this.updates.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload()
        }
      })
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.responsiveService.checkWidth()
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}
