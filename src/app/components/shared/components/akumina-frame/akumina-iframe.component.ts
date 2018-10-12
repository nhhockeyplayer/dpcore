import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core'
import {ContentprojectorService} from '../../services/singleton/contentprojector.service'

// import * as obfuscator from 'javascript-obfuscator'

@Component({
  selector: 'app-akumina-iframe',
  template: `
    <iframe #akumina
            [width]="600"
            [height]="400"
            [id]='akumina'
            [src]='url'>
    </iframe>
  `,
  styleUrls: ['./akumina-iframe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AkuminaIFrameComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() url

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }

}

// onLoad() {
// (load)='onLoad()'
// this is caugin recursive infinite loop
// return this.template
// }

// url: SafeResourceUrl

//             [src]='url.getObfuscatedCode()' >

// this.url = obfuscator.obfuscate(self.transform(url).toString())
// .pipe(
//   takeLast(1)
// )
