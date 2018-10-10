import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {ResponsiveService} from '../../services/singleton-services/responsive.service'

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss']
})
export class ContentprojectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('akumina') template

  public isMobile: Boolean

  constructor(private responsiveService: ResponsiveService) {

  }

  ngOnInit() {
    this.onResize()
    this.responsiveService.checkWidth()
  }

  onResize() {
    this.responsiveService.getMobileStatus()
      .subscribe(isMobile => {
        this.isMobile = isMobile
      })
  }

  ngAfterViewInit() {
    console.log('container template' + this.template)
  }

  ngOnDestroy() {
  }
}
