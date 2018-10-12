import {RouterModule, Routes} from '@angular/router'
import {ModuleWithProviders, NgModule} from '@angular/core'

import {ContentprojectionComponent} from './components/contentprojection/contentprojection.component'
import {ContentprojectorService} from './services/singleton/contentprojector.service'
import {ResponsiveService} from './services/singleton/responsive.service'

const routerConfig: Routes = [
  {path: 'contentprojection', component: ContentprojectionComponent, data: {title: 'Contentprojection'}},

]

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [],
  exports: [
    RouterModule,
  ]
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [ResponsiveService, ContentprojectorService]
    }
  }
}
