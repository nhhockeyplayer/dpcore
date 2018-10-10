import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core'

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.scss']
})
export class ContentprojectionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('akumina') template

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.template)
  }

  ngOnDestroy() {
  }
}
