import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {ContentprojectionComponent} from './contentprojection.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ContentprojectionComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ContentprojectionComponent
  ]
})
export class ContentprojectionModule {
}

export default ContentprojectionModule
