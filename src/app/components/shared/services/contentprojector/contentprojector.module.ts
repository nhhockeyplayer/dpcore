import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {ContentprojectorService} from './contentprojector.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    ContentprojectorService
  ]
})
export class ContentprojectorModule {
}

export default ContentprojectorModule
