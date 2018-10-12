import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core'

import {ResponsiveService} from './components/shared/services/singleton/responsive.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
  // host: {
  //   '(window:resize)': 'onResize($event)'
  // }
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'AKUMINA content projector microservice prototype'

  navigation = [
    {link: 'content', label: 'Content'},
  ]

  // can inject it here or inject it from app.module
  // but injecting here
  // constructor(@Optional() @SkipSelf() sharedServicesModule: SharedServicesModule,
  //             @Optional() @SkipSelf() sharedComponentsModule: SharedComponentsModule,
  //             private responsiveService: ResponsiveService,
  //             private detector: ChangeDetectorRef) {
  //
  //   if (sharedServicesModule) {       // https://angular.io/guide/singleton-services guard against multiple import
  //     throw new Error(
  //       'SharedServicesModule is already loaded. Import it in the AppModule only');
  //   }
  //   if (sharedComponentsModule) {
  //     throw new Error(
  //       'SharedComponentsModule is already loaded. Import it in the AppModule only');
  //   }
  // }
  //
  //

  constructor(private responsiveService: ResponsiveService,
              private detector: ChangeDetectorRef) {

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
