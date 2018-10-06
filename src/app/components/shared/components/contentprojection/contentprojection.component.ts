import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core'
import {ContentprojectorService} from '../../services/contentprojector/contentprojector.service'

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss']
})
export class ContentprojectionComponent implements OnInit, AfterViewInit, OnDestroy {

  content: any

  constructor(private microService: ContentprojectorService) {
  }

  ngOnInit() {
    this.microService.projectorSubject$
      .subscribe((content) => {
        this.content = content
      })
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }

}
