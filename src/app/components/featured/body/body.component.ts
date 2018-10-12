import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-body',
  template: `
      <div>
        [body]="body"
      </div>
  `,
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() body

  constructor() { }

  ngOnInit() {
  }

}
