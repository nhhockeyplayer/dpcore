import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core'

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
export class AkuminaIFrameComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() url

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('PROPERTY: url=' + this.url)
    console.log('PROPERTY: changes.url.previousValue=' + changes.url.previousValue)
    console.log('PROPERTY: changes.url.currentValue' + changes.url.currentValue)


  }

}
//
// ,
// {
//   compact: false,
//     controlFlowFlattening: true
// }

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
