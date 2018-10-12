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

// import * as JavaScriptObfuscator from 'javaScript-obfuscator'

@Component({
  selector: 'app-akumina-iframe',
  template: `
    <iframe #akumina
            [width]="1100"
            [height]="800"
            [id]='akumina'
            [src]='url'> 
            <!--[src]='window.btoa(url)'>-->
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

    // this.url = JavaScriptObfuscator.obfuscate(this.url)

    // this.url = window.atob(this.url)

    console.log('PROPERTY: obfuscated = ' + this.url)
  }

}
