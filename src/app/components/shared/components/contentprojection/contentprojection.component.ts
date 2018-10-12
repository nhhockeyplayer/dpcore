import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core'
import {ContentprojectorService} from '../../services/singleton/contentprojector.service'
import {map, tap} from 'rxjs/internal/operators'

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContentprojectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('akuminaTemplate') akuminaTemplate

  @Input() loading: boolean = true

  url

  constructor(private svc: ContentprojectorService) {

  }

  ngOnInit() {
    console.log('container template' + this.akuminaTemplate)
    const projector$ = this.svc.project()

    projector$
      .pipe(
        map((url) => this.url = url),
        tap(async (url) => {
          console.log(url)
          this.loading = false
        })
      )
      .subscribe()
  }

  onResize() {
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
  }

}
